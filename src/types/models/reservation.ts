export interface Reservation {
  end_date: string
  id: string
  room_id: string
  start_date: string
  status: 'finished' | 'active'
  user_id: string
}
