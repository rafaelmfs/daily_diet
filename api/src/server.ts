import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import { authenticateRoutes } from './routes/authenticateRoutes';
import { userRoutes } from './routes/userRoutes';
import { mealsRoutes } from './routes/mealsRoutes';


const app = fastify({ logger: true })

app.register(fastifyCors)
app.register(authenticateRoutes)
app.register(userRoutes, {
  prefix: "user"
})
app.register(mealsRoutes, {
  prefix: "meals",
})



app.listen({
  port: 3333,
})
