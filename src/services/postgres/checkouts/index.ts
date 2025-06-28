import type { AxiosInstance } from 'axios'

import type { Checkout } from '@/types/models/checkout'

import type {
  BaseCheckoutData,
  CreateCheckoutData,
  DeleteCheckoutData,
  GetAllCheckoutsResponse,
  GetCheckoutData,
  UpdateCheckoutData
} from './types'

export class Checkouts {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createCheckout = async ({ payload, token }: CreateCheckoutData) => {
    try {
      return await this.instance.post<Checkout>('/checkouts', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ createCheckoutErrMessage: error.message })
      console.error({ createCheckinErrMessage: error.message })
      return {
        status: error?.response?.status ?? 500,
        data: error?.response?.data ?? { message: 'Erro inesperado' }
      }
    }
  }

  getAllCheckouts = async ({ token }: BaseCheckoutData) => {
    try {
      return await this.instance.get<GetAllCheckoutsResponse>('/checkouts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ getAllCheckoutsErrMessage: error.message })
    }
  }

  getCheckout = async ({ checkoutId, token }: GetCheckoutData) => {
    try {
      return await this.instance.get<Checkout>(
        `/checkouts/${checkoutId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ getCheckoutErrMessage: error.message })
    }
  }

  updateCheckout = async ({
    payload,
    token,
    checkoutId
  }: UpdateCheckoutData) => {
    try {
      return await this.instance.patch<void>(
        `/checkouts/${checkoutId.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ updateCheckoutErrMessage: error.message })
    }
  }

  deletCheckout = async ({ checkoutId, token }: DeleteCheckoutData) => {
    try {
      return await this.instance.delete<void>(
        `/checkouts/${checkoutId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ deleteCheckoutErrMessage: error.message })
    }
  }
}
