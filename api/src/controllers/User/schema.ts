import { z } from "zod";

export const newUserBodySchema = z.object({
  name: z.string(),
  login: z.string(),
  password: z.coerce.string()
})

export const getUserParamsSchema = z.object({
  id: z.string()
})