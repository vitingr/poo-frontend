'use client'

import axios from 'axios'
import type { FC } from 'react'
import { toast } from 'sonner'

import { Modal } from '@/components/toolkit/Modal'

import type { ConfirmDeleteProps } from './types'

export const ConfirmDelete: FC<ConfirmDeleteProps> = ({
  isModalOpen,
  setIsModalOpen,
  room
}) => {
  const handleRemoveHotelRoom = async () => {
    try {
      const { status } = await axios.post('/api/rooms/delete-room', {
        roomId: room.id,
        token: ''
      })

      if (status !== 200) {
        toast('Não foi possível remover esse quarto...')
        return
      }

      toast('O quarto foi removido com sucesso! 🎉')
      setIsModalOpen(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="flex w-full max-w-xl flex-col gap-4 bg-white px-6 pt-16 pb-12 lg:gap-8">
        <article>
          <h2 className="text-xl font-semibold">
            Tem certeza que deseja excluir esse quarto?
          </h2>
          <p className="text-sm text-neutral-500">
            Ao excluir um quarto, você não poderá recuperar ele novamente, essa
            ação é irreversível
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
            onClick={() => setIsModalOpen(false)}
          >
            Não, quero mantê-lo
          </button>
        </div>
      </div>
    </Modal>
  )
}
