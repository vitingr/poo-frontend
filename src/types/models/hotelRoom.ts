export interface HotelRoom {
  beds_qtd: number
  created_at: Date
  description: string
  floor: number
  has_tv: boolean
  has_wifi: boolean
  id: string
  is_available: boolean
  max_capacity: number
  price_per_night: number
  room_code: string
  room_image: string
  room_type: 'SINGLE' | 'DOUBLE' | 'SUITE' | 'DELUXE'
  updated_at: Date
}
