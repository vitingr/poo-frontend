import type { Reservation } from '@/types/models/reservation'

export interface BaseReservationData {
  token: string
}

export interface CreateReservationData extends BaseReservationData {
  payload: Pick<Reservation, 'room_id' | 'status' | 'end_date' | 'guest_id'>
}

export interface GetReservationData extends BaseReservationData {
  reservationId: string
}

export interface DeleteReservationData extends BaseReservationData {
  reservationId: string
}

export interface UpdateReservationData extends BaseReservationData {
  payload: Partial<Reservation>
  reservationId: string
}

export interface CancelReservationData extends BaseReservationData {
  reservationId: string
}

export type GetAllReservationsResponse = Reservation[]
