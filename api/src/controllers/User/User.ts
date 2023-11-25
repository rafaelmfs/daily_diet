import { FastifyReply, FastifyRequest } from "fastify";
import shortUUID from 'short-uuid';
import { userSchema } from "../../interfaces/User";
import { createUser, getUserById } from "../../models/user";
import { generateHash } from "../../utils/cryptoService";
import { getUserParamsSchema, newUserBodySchema } from "./schema";
import { CustomError } from "../../utils/CustomError";
export class User{
  public async register(req: FastifyRequest, res: FastifyReply) {
    try {
      const data = newUserBodySchema.safeParse(req.body)

      if (data.success) {
        const { data: newUserRequest } = data

        const hashPassword = generateHash(newUserRequest.password)

        console.log("Password", hashPassword)

        const newUser = userSchema.parse({
          ...newUserRequest,
          password: hashPassword,
          id: shortUUID.generate()
        })
  
        await createUser(newUser)      
        
        return res.status(201).send({
          message: 'usuário criado com sucesso!'
        })
      }

      return res.status(400).send()

    } catch (error) {
      res.status(500).send({
        message: 'Erro interno no servidor'
      })

      console.log(error)
      throw error

    }
  }

  public async getUser(req: FastifyRequest, res: FastifyReply, ){
    try {
      const { id } = getUserParamsSchema.parse(req.params)
      if (id !== req.user?.id) {
        throw new CustomError({
          code: 404,
          message: "Usuário inválido"
        })
      }

      const user = await getUserById(id)
      return res.status(200).send({ user });
      
    } catch (error) {

      if (error instanceof CustomError) {
        res
          .status(error.code)
          .send({
            message: error.message
          })
        
      }
      res.status(500).send()
      throw error
    }
  }

}