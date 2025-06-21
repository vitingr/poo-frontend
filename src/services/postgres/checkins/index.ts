import type { AxiosInstance } from 'axios'

export class Checkins {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
