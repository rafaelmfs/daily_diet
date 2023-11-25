import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  login: z.string().min(4, {
    message: "O login deve conter 4 caracteres ou mais"
  }),
  password: z.string(),
  id: z.string(),
  picture: z.string().optional(),
  created_at: z.string().default(new Date().toISOString()),
  updated_at: z.string().optional(),
})

export interface UserInterface extends z.infer<typeof userSchema>{ }

