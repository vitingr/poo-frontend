export interface Reservation {
  created_at: string
  end_date: string
  guest_id: string
  id: string
  room_id: string
  start_date: string
  status: 'FINISHED' | 'ACTIVE' | 'PENDING'
  total_price?: number
  updated_at: string
}
