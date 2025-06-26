import type { FC } from 'react'

import { Modal } from '@/components/toolkit/Modal'

import type { CheckoutRealizedProps } from './types'

export const CheckoutRealized: FC<CheckoutRealizedProps> = ({
  isOpen,
  setIsOpen
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-full max-w-md flex-col items-center gap-8 rounded-md bg-white px-8 pt-12 pb-8">
        <article className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">
            Checkout Realizado com sucesso!
          </h2>
          <p className="text-center text-sm text-neutral-500">
            Tudo pronto, seu checkout referente à essa reserva com devidamente
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
