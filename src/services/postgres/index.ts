import type { AxiosInstance } from 'axios'
import axios from 'axios'

import { apiBaseUrl } from '@/constants/environments/apiBaseUrl'

import { Checkins } from './checkins'
import { Guests } from './guests'
import { HotelRooms } from './hotelRooms'
import { Reservations } from './reservations'

export class Motor {
  private instance: AxiosInstance

  public guests: Guests
  public checkins: Checkins
  public hotelRooms: HotelRooms
  public reservations: Reservations

  constructor() {
    this.instance = axios.create({
      baseURL: apiBaseUrl
    })

    this.guests = new Guests(this.instance)
    this.checkins = new Checkins(this.instance)
    this.hotelRooms = new HotelRooms(this.instance)
    this.reservations = new Reservations(this.instance)
  }
}
