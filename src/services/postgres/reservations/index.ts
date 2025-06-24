import type { AxiosInstance } from 'axios'

import type { Reservation } from '@/types/models/reservation'

import type {
  BaseReservationData,
  CreateReservationData,
  DeleteReservationData,
  GetAllReservationsResponse,
  GetReservationData,
  UpdateReservationData
} from './types'

export class Reservations {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createReservation = async ({ payload, token }: CreateReservationData) => {
    try {
      return await this.instance.post<Reservation>('/reservations', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ createReservationErrMessage: error.message })
      return { status: 500, data: {} as Reservation }
    }
  }

  getAllReservations = async ({ token }: BaseReservationData) => {
    try {
      return await this.instance.get<GetAllReservationsResponse>(
        '/reservations',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ getAllReservationsErrMessage: error.message })
    }
  }

  getReservation = async ({ reservationId, token }: GetReservationData) => {
    try {
      return await this.instance.get<Reservation>(
        `/reservations/${reservationId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ getReservationErrMessage: error.message })
    }
  }

  updateReservation = async ({
    payload,
    token,
    reservationId
  }: UpdateReservationData) => {
    try {
      return await this.instance.patch<void>(
        `/reservations/${reservationId.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ updateReservationErrMessage: error.message })
    }
  }

  deletReservation = async ({
    reservationId,
    token
  }: DeleteReservationData) => {
    try {
      return await this.instance.delete<void>(
        `/reservations/${reservationId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ deleteReservationErrMessage: error.message })
    }
  }
}
