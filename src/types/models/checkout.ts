export interface Checkout {
  checkout_date: string
  guest_id: string
  guest_name?: string
  id: string
  reservation_id: string
  room_code?: string
  room_id: string
  total_price: number
}
