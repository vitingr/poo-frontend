import type { AxiosInstance } from 'axios'

import type { HotelRoom } from '@/types/models/hotelRoom'

import type {
  BaseHotelRoomData,
  CreateHotelRoomData,
  DeleteHotelRoomData,
  GetAllHotelRoomsResponse,
  GetGroupedHotelRoomsResponse,
  GetHotelRoomData,
  UpdateHotelRoomData
} from './types'

export class HotelRooms {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createHotelRoom = async ({ payload, token }: CreateHotelRoomData) => {
    try {
      return await this.instance.post<HotelRoom>(`/hotel-rooms`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ createHotelRoomsErrMessage: error.message })
      return { status: 500 }
    }
  }

  getAllHotelRooms = async ({ token }: BaseHotelRoomData) => {
    try {
      return await this.instance.get<GetAllHotelRoomsResponse>('/hotel-rooms', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({ getAllHotelRoomsErrMessage: error.message })
    }
  }

  getGroupedHotelRooms = async ({ token }: BaseHotelRoomData) => {
    try {
      return await this.instance.get<GetGroupedHotelRoomsResponse>(
        '/hotel-rooms/grouped-by-floor',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ getAllHotelRoomsErrMessage: error.message })
    }
  }

  getHotelRoom = async ({ roomId, token }: GetHotelRoomData) => {
    try {
      return await this.instance.get<HotelRoom>(
        `/hotel-rooms/${roomId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ getHotelRoomErrMessage: error.message })
    }
  }

  updateHotelRoom = async ({ payload, token, roomId }: UpdateHotelRoomData) => {
    try {
      return await this.instance.patch<void>(
        `/hotel-rooms/${roomId.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ updateHotelRoomErrMessage: error.message })
    }
  }

  deleteHotelRoom = async ({ roomId, token }: DeleteHotelRoomData) => {
    try {
      return await this.instance.delete<void>(
        `/hotel-rooms/${roomId.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ deletHotelRoomErrMessage: error.message })
    }
  }
}
