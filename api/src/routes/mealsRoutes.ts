import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { authorize } from "../middlewares/authorization"

export async function mealsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (req, reply) => authorize(req, reply))
  
    /**GET ALL MEALS */
  app.get('/', (req: FastifyRequest, reply: FastifyReply) => {})
  /**GET A SPECIFIC MEAL */
  app.get('/:id', (req: FastifyRequest, reply: FastifyReply) => { })
  /** Metrics for all meals*/
  app.get('/metrics', (req: FastifyRequest, reply: FastifyReply) => { })
  /**Create a meal */
  app.post('/', (req: FastifyRequest, reply: FastifyReply) => { })
  /**Update a meal */
  app.patch('/:id', (req: FastifyRequest, reply: FastifyReply) => { })
  /** Delete a meal */
  app.delete('/:id', (req: FastifyRequest, reply: FastifyReply) => { })

}