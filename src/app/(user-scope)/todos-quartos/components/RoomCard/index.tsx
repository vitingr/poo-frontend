'use client'

import Image from 'next/image'
import { type FC, useState } from 'react'

import { Check } from '@/assets/common/Check'

import { ConfirmDelete } from './ConfirmDelete'
import { EditHotelRoom } from './EditHotelRoom'
import type { RoomCardProps } from './types'

export const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="group cursor-pointer rounded-md bg-white transition-all duration-300 hover:shadow">
        <figure className="h-[220px] w-full rounded-t-md">
          <Image
            alt={room.room_code}
            className="h-[220px] w-full rounded-t-md object-cover transition-all duration-300 group-hover:brightness-95"
            height={1080}
            src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
            width={1920}
          />
        </figure>
        <div className="flex w-full flex-col gap-3 rounded-b-md bg-white px-4 py-6">
          <div className="flex items-center gap-3">
            {room.room_type === 'DELUXE' && (
              <span className="-ml-1 w-fit rounded-md bg-amber-50 px-3 py-0.5 text-center text-[10px] text-amber-500 uppercase">
                Deluxe
              </span>
            )}
            {room.room_type === 'DOUBLE' && (
              <span className="-ml-1 w-fit rounded-md bg-pink-50 px-3 py-0.5 text-center text-[10px] text-pink-500 uppercase">
                Double
              </span>
            )}
            {room.room_type === 'SINGLE' && (
              <span className="-ml-1 w-fit rounded-md bg-emerald-50 px-3 py-0.5 text-center text-[10px] text-emerald-500 uppercase">
                Single
              </span>
            )}
            {room.room_type === 'SUITE' && (
              <span className="-ml-1 w-fit rounded-md bg-purple-50 px-3 py-0.5 text-center text-[10px] text-purple-500 uppercase">
                Suite
              </span>
            )}
            {!room.is_available ? (
              <span className="-ml-1 w-fit rounded-md bg-red-50 px-3 py-0.5 text-center text-[10px] text-red-500 uppercase">
                Ocupado
              </span>
            ) : (
              <span className="-ml-1 w-fit rounded-md bg-blue-50 px-3 py-0.5 text-center text-[10px] text-blue-500 uppercase">
                Disponível
              </span>
            )}
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
          <div className="flex w-full items-center justify-end gap-4">
            <button
              className="Btn"
              onClick={() => setIsDeleteModalOpen(true)}
              type="button"
            >
              <figure className="sign">
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
              </figure>

              <div className="text">Remover</div>
            </button>
            <button
              className="Btn"
              onClick={() => setIsEditModalOpen(true)}
              type="button"
            >
              <figure className="sign">
                <svg
                  fill="none"
                  height="22"
                  viewBox="0 0 22 22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5347 4.30628C21.5347 2.00628 19.7347 0.206283 17.4347 0.206283C16.3347 0.106283 15.3347 0.606283 14.5347 1.40628L1.33467 14.6063L0.934668 14.5063L0.634668 17.1063L0.034668 21.8063L1.03467 21.7063L6.83467 20.9063L7.43467 20.8063L7.13467 20.4063L20.3347 7.20628C21.1347 6.40628 21.6347 5.40628 21.5347 4.30628ZM2.03467 17.3063L2.13467 16.4063C2.83467 16.7063 3.43467 17.1063 4.03467 17.7063C4.63467 18.2063 5.03467 18.9063 5.33467 19.6063L1.73467 20.1063L2.03467 17.3063ZM5.63467 17.2063L15.6347 7.20628L16.9347 8.50628L6.63467 18.8063C6.33467 18.2063 6.03467 17.7063 5.63467 17.2063ZM4.53467 16.1063C4.03467 15.7063 3.53467 15.3063 2.93467 15.1063L13.2347 4.80628L14.5347 6.10628L4.53467 16.1063ZM19.3347 6.10628L18.0347 7.40628L14.3347 3.70628L15.6347 2.40628C16.1347 1.90628 16.8347 1.60628 17.4347 1.60628C18.8347 1.60628 20.0347 2.80628 20.0347 4.20628C20.1347 5.00628 19.8347 5.60628 19.3347 6.10628Z"
                    fill="currentColor"
                  />
                </svg>
              </figure>

              <div className="text">Editar</div>
            </button>
          </div>
        </div>
      </div>
      <ConfirmDelete
        isModalOpen={isDeleteModalOpen}
        room={room}
        setIsModalOpen={setIsDeleteModalOpen}
      />
      <EditHotelRoom
        isModalOpen={isEditModalOpen}
        room={room}
        setIsModalOpen={setIsEditModalOpen}
      />
    </>
  )
}
