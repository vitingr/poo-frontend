import Image from 'next/image'
import type { FC } from 'react'

import { ROOMS_DATA } from './data'
import { Check } from '@/assets/icons/Check'

export const AllRooms: FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:gap-12 xl:p-12">
      {ROOMS_DATA.map((floor, index: number) => (
        <div
          className="flex w-full flex-col gap-4 xl:gap-6"
          key={`floor-${index}`}
        >
          <h2 className="flex items-end gap-3 text-2xl font-semibold lg:text-3xl">
            {index + 1} Andar{' '}
            <span className="mb-0.5 text-sm text-neutral-500">(8 quartos)</span>
          </h2>
          <div className="grid h-auto w-full items-stretch gap-x-6 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {floor.map((room, index: number) => (
              <div
                className="group cursor-pointer rounded-md bg-white transition-all duration-300 hover:shadow"
                key={`${room.hotel_code}-${index}`}
              >
                <figure className="h-[200px] w-full rounded-t-md">
                  <Image
                    alt={room.hotel_code}
                    className="h-[200px] w-full rounded-t-md object-cover transition-all duration-300 group-hover:brightness-95"
                    height={1080}
                    src={room.image}
                    width={1920}
                  />
                </figure>
                <div className="flex w-full flex-col gap-3 rounded-b-md bg-white px-4 py-6">
                  {room.type === 'premium' ? (
                    <span className="-ml-1 w-fit rounded-md bg-amber-50 px-3 py-0.5 text-center text-[10px] text-amber-500 uppercase">
                      {room.type}
                    </span>
                  ) : (
                    <span className="-ml-1 w-fit rounded-md bg-indigo-50 px-3 py-0.5 text-center text-[10px] text-indigo-500 uppercase">
                      {room.type}
                    </span>
                  )}
                  <article className="flex w-full flex-col">
                    <h3 className="text-xl font-semibold">{room.hotel_code}</h3>
                    <p className="text-sm text-neutral-500">
                      {room.description}
                    </p>
                  </article>
                  <ul className="flex list-none flex-col gap-2 pt-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <p className="text-sm text-neutral-600">
                        Possui TV Inclusa
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <p className="text-sm text-neutral-600">
                        Possui Internet Inclusa
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <p className="text-sm text-neutral-600">
                        Possui Banheiro Inclusa
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-indigo-600" />
                      <p className="text-sm text-neutral-600">
                        Possui Cama Inclusa
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
