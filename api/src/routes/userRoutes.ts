import { FastifyInstance } from "fastify";
import { User } from "../controllers/User/User";
import { authorize } from "../middlewares/authorization";

const userController = new User()

export async function userRoutes(app: FastifyInstance) {

  app.post('/user', userController.register)
  app.get('/user/:id', {
    preHandler: authorize
  },userController.getUser)
}