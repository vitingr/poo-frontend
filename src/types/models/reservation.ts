export interface Reservation {
  end_date: string
  id: string
  room_id: string
  start_date: string
  status: 'FINISHED' | 'ACTIVE' | 'PENDING'
  user_id: string
}
