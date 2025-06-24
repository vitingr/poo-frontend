import { z } from 'zod'

export const createCheckinSchema = z.object({
  guest_id: z.string().nonempty('Esse campo é obrigatório'),
  room_id: z.string().nonempty('Esse campo é obrigatório')
})

export type CreateCheckinInputs = z.infer<typeof createCheckinSchema>
