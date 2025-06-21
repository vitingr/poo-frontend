import type { AxiosInstance } from 'axios'
import axios from 'axios'

import { apiBaseUrl } from '@/constants/environments/apiBaseUrl'

import { Checkins } from './checkins'
import { Checkouts } from './checkouts'
import { Guests } from './guests'
import { HotelRooms } from './hotelRooms'

export class Motor {
  private instance: AxiosInstance
  public guests: Guests
  public checkins: Checkins
  public checkouts: Checkouts
  public hotelRooms: HotelRooms

  constructor() {
    this.instance = axios.create({
      baseURL: apiBaseUrl
    })

    this.guests = new Guests(this.instance)
    this.checkins = new Checkins(this.instance)
    this.checkouts = new Checkouts(this.instance)
    this.hotelRooms = new HotelRooms(this.instance)
  }
}
