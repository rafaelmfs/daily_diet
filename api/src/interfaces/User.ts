import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  login: z.string().min(8),
  password: z.string(),
  id: z.string(),
  picture: z.string().nullable(),
  created_at: z.string().default(new Date().toISOString()),
  updated_at: z.string().nullable(),
})

export interface UserInterface extends z.infer<typeof userSchema>{ }

