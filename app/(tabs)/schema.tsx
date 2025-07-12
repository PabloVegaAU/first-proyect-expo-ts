import { z } from "zod"

export const schema = z.object({
  username: z.string().min(3, { message: "Debe tener al menos 3 caracteres" }).max(16, { message: "No debe tener más de 16 caracteres" }),
  password: z.string().min(5, { message: "Debe tener al menos 5 caracteres" }).max(16, { message: "No debe tener más de 16 caracteres" }),
})