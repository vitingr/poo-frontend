import type { Guest } from '@/types/models/guest'

export interface BaseGuestData {
  token: string
}

export interface CreateGuestData extends BaseGuestData {
  payload: Pick<
    Guest,
    'address' | 'birth_date' | 'document' | 'email' | 'full_name' | 'phone'
  >
}

export interface GetGuestData extends BaseGuestData {
  guestId: string
}

export interface DeleteGuestData extends BaseGuestData {
  guestId: string
}

export interface UpdateGuestData extends BaseGuestData {
  guestId: string
  payload: Partial<Guest>
}

export type GetAllGuestsResponse = Guest[]
