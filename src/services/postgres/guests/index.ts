import type { AxiosInstance } from 'axios'

import type { Guest } from '@/types/models/guest'

import type {
  BaseGuestData,
  CreateGuestData,
  DeleteGuestData,
  GetAllGuestsResponse,
  GetGuestData,
  UpdateGuestData
} from './types'

export class Guests {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createGuest = async ({ payload, token }: CreateGuestData) => {
    try {
      return await this.instance.post<Guest>(`/guests`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ createGuestErrMessage: error.message })
    }
  }

  getAllGuests = async ({ token }: BaseGuestData) => {
    try {
      return await this.instance.get<GetAllGuestsResponse>('/guests', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ getAllGuestsErrMessage: error.message })
    }
  }

  getGuest = async ({ token, guestId }: GetGuestData) => {
    try {
      return await this.instance.get<Guest>(`/guests/${guestId.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ getGuestErrMessage: error.message })
    }
  }

  updateGuest = async ({ token, guestId, payload }: UpdateGuestData) => {
    try {
      return await this.instance.patch<void>(
        `/guests/${guestId.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ updateGuestErrMessage: error.message })
    }
  }

  deleteGuest = async ({ token, guestId }: DeleteGuestData) => {
    try {
      return await this.instance.delete<void>(`/guests/${guestId.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ deleteGuestErrMessage: error.message })
    }
  }
}
