'use client'

import type { FC } from 'react'
import { useState } from 'react'

import { Energy } from '@/assets/common/Energy'
import { HotelRoom } from '@/assets/common/HotelRoom'

export const ReservationType: FC = () => {
  const [reservationType, setReservationType] = useState<string>('')

  return (
    <section className="w-full bg-neutral-50 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:p-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-center">
          <span className="text-center text-xl font-semibold lg:text-3xl">
            Tipo da Reserva
          </span>
          <p className="text-center text-sm text-neutral-500">
            Escolha qual é o tipo da reserva que será realizada
          </p>
        </article>
        {reservationType === '' ? (
          <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 lg:flex-row">
            <button
              className="flex w-full cursor-pointer flex-col items-center gap-4 rounded-md border border-neutral-400 bg-white px-6 py-8 transition-all duration-300 hover:shadow"
              onClick={() => setReservationType('instant-booking')}
            >
              <figure className="flex flex-col items-center">
                <Energy className="h-8 w-8 text-blue-600" />
              </figure>
              <p>Reserva Imediata</p>
            </button>
            <button
              className="flex w-full cursor-pointer flex-col items-center gap-4 rounded-md border border-neutral-400 bg-white px-6 py-8 transition-all duration-300 hover:shadow"
              onClick={() => setReservationType('standart-booking')}
            >
              <figure className="flex flex-col items-center">
                <HotelRoom className="h-8 w-8 text-blue-600" />
              </figure>
              <p>Reserva Normal</p>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
