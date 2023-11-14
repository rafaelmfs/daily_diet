import fastifyCors from '@fastify/cors';
import fastify from 'fastify';


const app = fastify({ logger: true })

app.register(fastifyCors)



app.listen({
  port: 3333,
})
