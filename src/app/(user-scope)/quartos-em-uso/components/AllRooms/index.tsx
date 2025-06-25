import type { FC } from 'react'

import { motor } from '@/instances/motor'

import { RoomCard } from '../RoomCard'

export const AllRooms: FC = async () => {
  const { data } = await motor.hotelRooms.getHotelRoomsInUse({ token: '' })

  return (
    <section className="flex w-full flex-col gap-12 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:gap-16 xl:p-12">
      {data.map(({ floor, rooms }) => (
        <div
          className="flex w-full flex-col gap-6 xl:gap-8"
          key={`floor-${floor}`}
        >
          <h2 className="flex items-end gap-3 text-2xl font-semibold lg:text-3xl">
            {floor} Andar{' '}
            <span className="mb-0.5 text-sm text-neutral-500">
              ({rooms.length} quartos)
            </span>
          </h2>
          <div className="grid h-auto w-full items-stretch gap-x-6 gap-y-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {rooms.map((room, index) => (
              <RoomCard key={`${room.room_code}-${index}`} room={room} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
