'use client'

import Image from 'next/image'
import { type FC, useState } from 'react'

import { Check } from '@/assets/common/Check'

import { ConfirmDelete } from './ConfirmDelete'
import type { RoomCardProps } from './types'

export const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="group cursor-pointer rounded-md bg-white transition-all duration-300 hover:shadow">
        <figure className="h-[220px] w-full rounded-t-md">
          <Image
            alt={room.room_code}
            className="h-[220px] w-full rounded-t-md object-cover transition-all duration-300 group-hover:brightness-95"
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
          </ul>
          <div className="flex w-full items-center justify-end">
            <button
              className="Btn"
              onClick={() => setIsModalOpen(true)}
              type="button"
            >
              <div className="sign">
                <svg
                  className="bi bi-trash3-fill"
                  fill="currentColor"
                  height="18"
                  viewBox="0 0 16 16"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
                </svg>
              </div>

              <div className="text">Remover</div>
            </button>
          </div>
        </div>
      </div>
      <ConfirmDelete
        isModalOpen={isModalOpen}
        room={room}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}
