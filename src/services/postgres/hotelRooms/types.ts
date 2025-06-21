import type { HotelRoom } from '@/types/models/hotelRoom'

export interface BaseHotelRoomData {
  token: string
}

export interface CreateHotelRoomData extends BaseHotelRoomData {
  payload: Pick<
    HotelRoom,
    | 'beds_qtd'
    | 'description'
    | 'floor'
    | 'has_tv'
    | 'has_wifi'
    | 'is_available'
    | 'price_per_night'
    | 'room_image'
    | 'room_type'
  >
}

export interface GetHotelRoomData extends BaseHotelRoomData {
  roomId: string
}

export interface DeleteHotelRoomData extends BaseHotelRoomData {
  roomId: string
}

export interface UpdateHotelRoomData extends BaseHotelRoomData {
  payload: Partial<HotelRoom>
  roomId: string
}

export type GetAllHotelRoomsResponse = HotelRoom[]
