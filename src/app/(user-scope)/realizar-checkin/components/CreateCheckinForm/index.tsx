import Image from 'next/image'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateCheckinInputs } from './schema'
import { createCheckinSchema } from './schema'

export const CreateCheckinForm: FC = () => {
  const formMethods = useForm<CreateCheckinInputs>({
    resolver: zodResolver(createCheckinSchema)
  })

  const {
    handleSubmit,
    register,
    formState: {}
  } = formMethods

  const onSubmit: SubmitHandler<CreateCheckinInputs> = async ({
    room_code,
    until,
    userId
  }) => {
    try {
      // mandar aqui req na api
      toast('Event has been created.')
    } catch (onSubmitErr) {
      console.error(onSubmitErr)
    }
  }

  return (
    <section className="w-full bg-neutral-50 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:p-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-center">
          <span className="bg-gradient-to-r from-fuchsia-600 via-indigo-500 to-indigo-600 bg-clip-text text-xl font-semibold text-transparent lg:text-2xl">
            Adicionar novo Quarto
          </span>
          <p className="text-center text-sm text-neutral-500">
            Preencha o formulário abaixo para adicionar um novo quarto dentro da
            nossa <br /> plataforma de gerenciamento de quartos de hotéis
          </p>
        </article>
        <form
          className="flex w-full max-w-xl flex-col justify-center rounded-[2px] border border-neutral-200 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <figure className="h-[240px] w-full rounded-t-[2px]">
            <Image
              alt="Background Image"
              className="h-[240px] w-full rounded-t-[2px] object-cover"
              height={2253}
              src="https://www.parkregiskriskin.ae/wp-content/uploads/2020/07/room-twin-bed-2520x1400.jpg"
              width={3000}
            />
          </figure>
          <article className="flex w-full flex-col gap-3 px-4 py-6">
            <div className="w-full">
              <SelectField
                options={[
                  {
                    label: 'Sim',
                    value: 'true'
                  },
                  {
                    label: 'Não',
                    value: 'false'
                  }
                ]}
                id="is_available"
                label="Já estará disponível?"
                name="is_available"
                variant="secondary"
                {...register('room_code')}
              />
            </div>

            <div className="w-full">
              <SelectField
                options={[
                  {
                    label: 'Sim',
                    value: 'true'
                  },
                  {
                    label: 'Não',
                    value: 'false'
                  }
                ]}
                id="is_available"
                label="Já estará disponível?"
                name="is_available"
                variant="secondary"
                {...register('userId')}
              />
            </div>

            <div className="w-full">
              <SelectField
                options={[
                  {
                    label: 'Sim',
                    value: 'true'
                  },
                  {
                    label: 'Não',
                    value: 'false'
                  }
                ]}
                id="is_available"
                label="Já estará disponível?"
                name="is_available"
                variant="secondary"
                {...register('room_code')}
              />
            </div>

            <button className="continue-application mt-6" type="submit">
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Cadastrar novo quarto do hotel
            </button>
          </article>
        </form>
      </div>
    </section>
  )
}
