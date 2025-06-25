import type { FC } from 'react'

import { Modal } from '@/components/toolkit/Modal'

import type { CheckinRealizedProps } from './types'

export const CheckinRealized: FC<CheckinRealizedProps> = ({
  isOpen,
  setIsOpen
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-full max-w-md flex-col items-center gap-8 rounded-md bg-white px-8 pt-12 pb-8">
        <article>
          <h2>Checkin Realizado com sucesso!</h2>
          <p>
            Tudo pronto, seu checkin referente à essa reserva com devidamente
            realizado.
          </p>
        </article>
        <button
          className="cursor-pointer rounded-sm border border-blue-500 px-6 py-2 text-center text-blue-500 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Fechar
        </button>
      </div>
    </Modal>
  )
}
