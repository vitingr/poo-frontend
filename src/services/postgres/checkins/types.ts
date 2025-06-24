import type { Checkin } from '@/types/models/checkin'

export interface BaseCheckinData {
  token: string
}

export interface CreateCheckinData extends BaseCheckinData {
  payload: Pick<
    Checkin,
    | 'room_id'
    | 'guest_id'
    | 'checkin_date'
    | 'checkout_estimated'
    | 'reservation_id'
  >
}

export interface GetCheckinData extends BaseCheckinData {
  checkinId: string
}

export interface DeleteCheckinData extends BaseCheckinData {
  checkinId: string
}

export interface UpdateCheckinData extends BaseCheckinData {
  checkinId: string
  payload: Partial<Checkin>
}

export type GetAllCheckinsResponse = Checkin[]
