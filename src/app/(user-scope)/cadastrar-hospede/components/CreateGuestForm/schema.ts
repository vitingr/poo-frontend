import { z } from 'zod'

export const createGuestSchema = z.object({
  full_name: z.string().nonempty('Esse campo é obrigatório'),
  document: z.string().nonempty('Esse campo é obrigatório'),
  email: z.string().email().nonempty('Esse campo é obrigatório'),
  phone: z.string().nonempty('Esse campo é obrigatório'),
  address: z.string().nonempty('Esse campo é obrigatório')
})

export type CreateGuestInputs = z.infer<typeof createGuestSchema>
