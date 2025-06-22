import Image from 'next/image'
import type { FC } from 'react'

import { Check } from '@/assets/common/Check'

import type { RoomCardProps } from './types'

export const RoomCard: FC<RoomCardProps> = async ({ room }) => {
  return (
    <div className="group cursor-pointer rounded-md bg-white transition-all duration-300 hover:shadow">
      <figure className="h-[200px] w-full rounded-t-md">
        <Image
          alt={room.room_code}
          className="h-[200px] w-full rounded-t-md object-cover transition-all duration-300 group-hover:brightness-95"
          height={1080}
          src={room.room_image}
          width={1920}
        />
      </figure>
      <div className="flex w-full flex-col gap-3 rounded-b-md bg-white px-4 py-6">
        <div className="flex items-center gap-3">
          {room.room_type === 'DELUXE' ? (
            <span className="-ml-1 w-fit rounded-md bg-amber-50 px-3 py-0.5 text-center text-[10px] text-amber-500 uppercase">
              Deluxe
            </span>
          ) : (
            <span className="-ml-1 w-fit rounded-md bg-slate-50 px-3 py-0.5 text-center text-[10px] text-slate-500 uppercase">
              Standard
            </span>
          )}
          <span className="-ml-1 w-fit rounded-md bg-blue-50 px-3 py-0.5 text-center text-[10px] text-blue-500 uppercase">
            Disponível
          </span>
        </div>
        <article className="flex w-full flex-col">
          <h3 className="text-xl font-semibold">{room.room_code}</h3>
          <p className="text-sm text-neutral-500">{room.description}</p>
        </article>
        <ul className="flex list-none flex-col gap-2 pt-3">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-indigo-600" />
            <p className="text-sm text-neutral-600">Possui TV Inclusa</p>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-indigo-600" />
            <p className="text-sm text-neutral-600">Possui Internet Inclusa</p>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-indigo-600" />
            <p className="text-sm text-neutral-600">Possui Banheiro Inclusa</p>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-indigo-600" />
            <p className="text-sm text-neutral-600">Possui Cama Inclusa</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
