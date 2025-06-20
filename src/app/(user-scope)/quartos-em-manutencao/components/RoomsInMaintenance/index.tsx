import Image from 'next/image'
import type { FC } from 'react'

import { ROOMS_DATA } from '@/app/(user-scope)/todos-quartos/components/AllRooms/data'

export const RoomsInMaintenance: FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:gap-12 xl:p-12">
      {ROOMS_DATA.slice(0, 1).map((floor, index: number) => (
        <div
          className="flex w-full flex-col gap-8 xl:gap-12"
          key={`floor-${index}`}
        >
          <h2 className="flex items-end gap-3 text-2xl font-semibold lg:text-3xl">
            Quartos em manutenção
            <span className="mb-0.5 text-sm text-neutral-500">(8 quartos)</span>
          </h2>
          <div className="grid h-auto w-full grid-cols-1 items-stretch gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {floor.map((room, index: number) => (
              <div
                className="group cursor-pointer rounded-md bg-white transition-all duration-300 hover:shadow"
                key={`${room.hotel_code}-${index}`}
              >
                <figure className="h-[200px] w-full rounded-t-md">
                  <Image
                    alt={room.hotel_code}
                    className="h-[200px] w-full rounded-t-md object-cover brightness-50 transition-all duration-300"
                    height={1080}
                    src={room.image}
                    width={1920}
                  />
                </figure>
                <div className="flex w-full flex-col gap-3 rounded-b-md bg-white px-4 py-6">
                  <div className="flex items-center gap-3">
                    {room.type === 'premium' ? (
                      <span className="-ml-1 w-fit rounded-md bg-amber-50 px-3 py-0.5 text-center text-[10px] text-amber-500 uppercase">
                        {room.type}
                      </span>
                    ) : (
                      <span className="-ml-1 w-fit rounded-md bg-indigo-50 px-3 py-0.5 text-center text-[10px] text-indigo-500 uppercase">
                        {room.type}
                      </span>
                    )}
                    <span className="-ml-1 w-fit rounded-md bg-blue-50 px-3 py-0.5 text-center text-[10px] text-blue-500 uppercase">
                      Disponível
                    </span>
                  </div>
                  <article className="flex w-full flex-col">
                    <h3 className="text-xl font-semibold">{room.hotel_code}</h3>
                    <p className="text-sm text-neutral-500">
                      {room.description}
                    </p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
