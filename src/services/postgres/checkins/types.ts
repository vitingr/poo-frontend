import type { Checkin } from '@/types/models/checkin'

export interface BaseCheckinData {
  token: string
}

export interface CreateCheckinData extends BaseCheckinData {
  payload: Pick<Checkin, 'room_id' | 'user_id'>
}

export interface GetCheckinData extends BaseCheckinData {
  guestId: string
}

export interface DeleteCheckinData extends BaseCheckinData {
  checkinId: string
}

export interface UpdateCheckinData extends BaseCheckinData {
  checkinId: string
  payload: Partial<Checkin>
}

export type GetAllCheckinsResponse = Checkin[]
