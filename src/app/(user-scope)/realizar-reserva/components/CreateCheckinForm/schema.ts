import { z } from 'zod'

export const createCheckinSchema = z.object({
  userId: z.string().nonempty('Esse campo é obrigatório'),
  room_code: z.string().nonempty('Esse campo é obrigatório'),
  until: z.date()
})

export type CreateCheckinInputs = z.infer<typeof createCheckinSchema>
