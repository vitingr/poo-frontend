import type { AxiosInstance } from 'axios'

import type {
  ValidateCredentialsPayload,
  ValidateCredentialsResponse
} from './types'

export class Auth {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  validateCredentials = async (payload: ValidateCredentialsPayload) => {
    try {
      return await this.instance.post<ValidateCredentialsResponse>(
        '/validate-code',
        payload
      )
    } catch (error) {
      console.error({
        validateCodeError: error
      })
    }
  }

  refreshToken = async () => {
    try {
      return await this.instance.post('/refresh-token', {})
    } catch (error) {
      console.error({ refreshTokenError: error })
    }
  }
}
