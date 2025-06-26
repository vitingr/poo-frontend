export interface Reservation {
  created_at: string
  end_date: string
  guest_id: string
  guest_name?: string
  id: string
  room_code?: string
  room_id: string
  start_date: string
  status: 'FINISHED' | 'ACTIVE' | 'PENDING' | 'CANCELED'
  total_price?: number
  updated_at: string
}
