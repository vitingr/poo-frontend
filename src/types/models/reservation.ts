export interface Reservation {
  room_id: string
  status: 'finished' | 'active'
  user_id: string
}
