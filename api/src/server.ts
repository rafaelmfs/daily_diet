import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import { authenticateRoutes } from './routes/authenticateRoutes';
import { userRoutes } from './routes/userRoutes';


const app = fastify({ logger: true })

app.register(fastifyCors)
app.register(authenticateRoutes)
app.register(userRoutes)



app.listen({
  port: 3333,
})
