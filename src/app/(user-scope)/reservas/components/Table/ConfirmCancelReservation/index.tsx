'use client'

import axios from 'axios'
import type { FC } from 'react'
import { toast } from 'sonner'

import { Modal } from '@/components/toolkit/Modal'
import { useGetAllReservations } from '@/hooks/swr/useGetAllReservations'

import type { ConfirmCancelReservationProps } from './types'

export const ConfirmCancelReservation: FC<ConfirmCancelReservationProps> = ({
  isOpen,
  reservation,
  setIsOpen
}) => {
  const { mutate } = useGetAllReservations()

  const handleRemoveHotelRoom = async () => {
    try {
      const { status } = await axios.post(
        '/api/reservations/cancel-reservation',
        {
          reservationId: reservation.id,
          token: ''
        }
      )

      if (status !== 200) {
        toast('Não foi possível cancelar essa reserva...')
        return
      }

      await mutate()
      setIsOpen(false)
      toast('A reserva foi cancelada com sucesso! 🎉')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-full max-w-xl flex-col gap-4 bg-white px-6 pt-16 pb-12 lg:gap-8">
        <article>
          <h2 className="text-xl font-semibold">
            Tem certeza que deseja cancelar essa reserva?
          </h2>
          <p className="text-sm text-neutral-500">
            Ao cancelar uma reserva, você não poderá ativá-la ele novamente,
            essa ação é irreversível
          </p>
        </article>
        <div className="flex w-full flex-col gap-4 md:flex-row lg:justify-between">
          <button
            className="w-full cursor-pointer border border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white transition-all duration-300 hover:brightness-110"
            onClick={() => handleRemoveHotelRoom()}
          >
            Sim, tenho certeza
          </button>
          <button
            className="w-full cursor-pointer border border-blue-500 px-4 py-2 text-sm text-blue-600 transition-all duration-300 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Não, quero mantê-lo
          </button>
        </div>
      </div>
    </Modal>
  )
}
