import { z } from "zod"

export const userSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string()
})

export type User = z.infer<typeof userSchema>
