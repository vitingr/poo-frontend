import { z } from 'zod'

export const RoomTypeSchema = z.enum(['SINGLE', 'DOUBLE', 'SUITE', 'DELUXE'])

export const createHotelRoomSchema = z.object({
  floor: z.string().nonempty('Esse campo é obrigatório'),
  room_type: RoomTypeSchema,
  beds_qtd: z.number().nonnegative('O número deve ser positivo'),
  max_capacity: z.number().nonnegative('O número deve ser positivo'),
  price_per_night: z.number().nonnegative('O número deve ser positivo'),
  is_available: z.string().nonempty('Esse campo é obrigatório'),
  has_tv: z.string(),
  has_wifi: z.string(),
  description: z.string().nonempty('Esse campo é obrigatório')
  // room_image: z.string().nonempty('Esse campo é obrigatório')
})

export type CreateRoomInputs = z.infer<typeof createHotelRoomSchema>
