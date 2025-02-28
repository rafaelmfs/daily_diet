import { FastifyInstance } from "fastify";
import { User } from "../controllers/User/User";
import { authorize } from "../middlewares/authorization";

const userController = new User();

export async function userRoutes(app: FastifyInstance) {
  app.post("/register", userController.register);
  app.get(
    "/user",
    {
      preHandler: authorize,
    },
    userController.getUser
  );
  app.patch(
    "/user/:id",
    {
      preHandler: authorize,
    },
    userController.updateUser
  );
}
