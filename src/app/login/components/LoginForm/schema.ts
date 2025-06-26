import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('Esse campo é obrigatório'),
  password: z.string().nonempty('Esse campo é obrigatório')
})
