import type { AxiosInstance } from 'axios'

import type { Checkin } from '@/types/models/checkin'

import type {
  BaseCheckinData,
  CreateCheckinData,
  DeleteCheckinData,
  GetAllCheckinsResponse,
  GetCheckinData,
  UpdateCheckinData
} from './types'

export class Checkins {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createCheckin = async ({ payload, token }: CreateCheckinData) => {
    try {
      return await this.instance.post<Checkin>('/checkins', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ createCheckinErrMessage: error.message })
      return {
        status: error?.response?.status ?? 500,
        data: error?.response?.data ?? { message: 'Erro inesperado' }
      }
    }
  }

  getAllCheckins = async ({ token }: BaseCheckinData) => {
    try {
      return await this.instance.get<GetAllCheckinsResponse>('/checkins', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ getAllCheckinsErrMessage: error.message })
    }
  }

  getCheckin = async ({ checkinId, token }: GetCheckinData) => {
    try {
      return await this.instance.get<Checkin>(
        `/checkins/${checkinId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ getCheckinErrMessage: error.message })
    }
  }

  updateCheckin = async ({ payload, token, checkinId }: UpdateCheckinData) => {
    try {
      return await this.instance.patch<void>(
        `/checkins/${checkinId.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ updateCheckinErrMessage: error.message })
    }
  }

  deletCheckin = async ({ checkinId, token }: DeleteCheckinData) => {
    try {
      return await this.instance.delete<void>(
        `/checkins/${checkinId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ deleteCheckinErrMessage: error.message })
    }
  }
}
