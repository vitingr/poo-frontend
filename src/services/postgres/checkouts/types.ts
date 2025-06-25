import type { Checkout } from '@/types/models/checkout'

export interface BaseCheckoutData {
  token: string
}

export interface CreateCheckoutData extends BaseCheckoutData {
  payload: Pick<
    Checkout,
    'room_id' | 'guest_id' | 'checkout_date' | 'total_price' | 'reservation_id'
  >
}

export interface GetCheckoutData extends BaseCheckoutData {
  checkoutId: string
}

export interface DeleteCheckoutData extends BaseCheckoutData {
  checkoutId: string
}

export interface UpdateCheckoutData extends BaseCheckoutData {
  checkoutId: string
  payload: Partial<Checkout>
}

export type GetAllCheckoutsResponse = Checkout[]
