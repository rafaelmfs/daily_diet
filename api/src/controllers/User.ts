import { FastifyReply, FastifyRequest } from "fastify";
import shortUUID from 'short-uuid';
import { z } from "zod";
import { userSchema } from "../interfaces/User";
import { createUser, getUserById, getUserByLogin } from "../models/user";
import { deleteSession } from "../models/user_sessions";
import { Authenticate } from "../services/Authenticate";
import { compareHash, generateHash } from "../services/cryptoService";


const auth = new Authenticate()

export class User{
  public async login(login: string, password: string) {
    const user =  await getUserByLogin(login);

    if (user) {
      const isCorrectPassword = compareHash(user.password, password);

      if (isCorrectPassword) {
        const token = auth.generateToken(user.id)

        return {
          auth: token
        }
      }
    }

    return {
      message: "Usuário ou senha inválido!"
    }
  }

  public async logout(session_id: string) { 
    await deleteSession(session_id);
  }
  
  public async register(req: FastifyRequest, res: FastifyReply) {
    const newUserBodySchema = z.object({
      name: z.string(),
      login: z.string(),
      password: z.string()
    })
    

    try {
      const data = newUserBodySchema.safeParse(req.body)

      if (data.success) {
        const { data: newUserRequest } = data

        const hashPassword = generateHash(newUserRequest.password)
        const newUser = userSchema.parse({
          ...newUserRequest,
          password: hashPassword,
          id: shortUUID.generate()
        })
  
        await createUser(newUser)      
        
        return res.send({
          message: 'usuário criado com sucess!'
        }).status(201)
      }

      return res.send().status(400)

    } catch (error) {
      res.send({
        message: 'Erro interno no servidor'
      }).status(500)

      console.log(error)
      throw error

    }
  }

  public async getUser(id: string) {
    try {
      const user = await getUserById(id)
      return user;

    } catch (error) {
      throw error
    }
  }

}