'use client'

import type { FC } from 'react'

import { useGetAllReservations } from '@/hooks/swr/useGetAllReservations'

import { ReservationsTable } from '../Table'

export const AllReservations: FC = () => {
  const { reservations } = useGetAllReservations()

  return (
    <section className="flex w-full flex-col gap-12 bg-neutral-50 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:p-12">
      <div className="flex flex-col gap-8 rounded-md border border-neutral-200 bg-white px-6 pt-6 pb-2">
        <article className="flex w-full flex-col gap-1">
          <h2 className="text-3xl font-semibold">Reservas</h2>
          <p className="text-sm text-neutral-500">
            Veja abaixo todas as últimas reservas que foram realizadas dentro de
            nosso sistema
          </p>
        </article>
        <ReservationsTable data={reservations} />
      </div>
    </section>
  )
}
