import type { AxiosInstance } from 'axios'
import axios from 'axios'

import { apiBaseUrl } from '@/constants/environments/apiBaseUrl'

import { Auth } from './auth'

export class Account {
  private instance: AxiosInstance

  public auth: Auth

  constructor() {
    this.instance = axios.create({
      baseURL: apiBaseUrl
    })

    this.auth = new Auth(this.instance)
  }
}
