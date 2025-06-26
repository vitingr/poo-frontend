import type { Reservation } from './reservation'

export interface Report {
  checkinDate: string
  checkoutDate: string
  checkoutEstimated: string
  guestId: string
  guestName?: string
  reservationEndDate: string
  reservationId: string
  reservationStartDate: string
  reservationStatus: Reservation['status']
  roomCode?: string
  roomId: string
  totalPrice: number
}
