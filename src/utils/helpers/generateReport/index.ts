import type { Checkin } from '@/types/models/checkin'
import type { Checkout } from '@/types/models/checkout'
import type { Report } from '@/types/models/report'
import type { Reservation } from '@/types/models/reservation'

export function createCheckoutReport({
  checkout,
  checkin,
  reservation
}: {
  checkout: Checkout
  checkin: Checkin
  reservation: Reservation
}): Report {
  return {
    guestId: checkout.guest_id,
    guestName:
      checkout.guest_name ?? checkin.guest_name ?? reservation.guest_name,
    roomId: checkout.room_id,
    roomCode: checkout.room_code ?? checkin.room_code ?? reservation.room_code,
    reservationId: checkout.reservation_id,
    checkinDate: checkin.checkin_date,
    checkoutEstimated: checkin.checkout_estimated,
    checkoutDate: checkout.checkout_date,
    reservationStartDate: reservation.start_date,
    reservationEndDate: reservation.end_date,
    reservationStatus: reservation.status,
    totalPrice: checkout.total_price ?? reservation.total_price ?? 0
  }
}
