import type { SetStateAction } from 'react'

import type { HotelRoom } from '@/types/models/hotelRoom'

export interface EditHotelRoomProps {
  isModalOpen: boolean
  room: HotelRoom
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}
