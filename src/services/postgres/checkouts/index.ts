import type { AxiosInstance } from 'axios'

export class Checkouts {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
