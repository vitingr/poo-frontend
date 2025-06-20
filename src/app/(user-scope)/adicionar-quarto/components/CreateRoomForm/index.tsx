/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Check } from '@/assets/icons/Check'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { zodResolver } from '@hookform/resolvers/zod'

import { FLOORS } from './data'
import type { CreateRoomInputs } from './schema'
import { createHotelRoomSchema } from './schema'

export const CreateRoomForm: FC = () => {
  const [hasTv, setHasTv] = useState<boolean>(false)
  const [hasWifi, setHasWifi] = useState<boolean>(false)

  const formMethods = useForm<CreateRoomInputs>({
    resolver: zodResolver(createHotelRoomSchema)
  })

  const {
    handleSubmit,
    register,
    formState: { isValidating, isSubmitSuccessful, isSubmitting }
  } = formMethods

  const onSubmit: SubmitHandler<CreateRoomInputs> = async ({
    beds_qtd,
    description,
    floor,
    has_tv,
    has_wifi,
    is_available,
    max_capacity,
    price_per_night,
    room_type
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
              src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
              width={3000}
            />
          </figure>
          <article className="flex w-full flex-col gap-3 px-4 py-6">
            <SelectField
              id="floor"
              label="Andar"
              name="floor"
              options={FLOORS}
              placeholder="Selecione Andar em que o quarto estará localizado"
              variant="secondary"
              {...register('floor')}
            />
            <InputField
              id="description"
              label="Descrição do Quarto"
              maxLength={1200}
              minLength={4}
              placeholder="Descrição do Quarto"
              spellCheck={false}
              {...register('description')}
              variant="secondary"
            />
            <div className="flex items-center gap-4 lg:justify-between">
              <div className="w-full">
                <InputField
                  id="beds_qtd"
                  label="Número de camas"
                  maxLength={6}
                  minLength={1}
                  placeholder="Número de camas nesse quarto"
                  type="number"
                  {...register('beds_qtd')}
                  variant="secondary"
                />
              </div>
              <div className="w-full">
                <InputField
                  id="max_capacity"
                  label="Capacidade Máxima"
                  max={10}
                  min={0}
                  placeholder="Capacidade máxima suportada por esse quarto"
                  type="number"
                  {...register('max_capacity')}
                  variant="secondary"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 lg:justify-between">
              <div className="w-full">
                <InputField
                  id="price_per_night"
                  label="Preço da diária"
                  maxLength={6}
                  minLength={1}
                  placeholder="Preço por cada noite"
                  type="number"
                  {...register('price_per_night')}
                  variant="secondary"
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
                  {...register('is_available')}
                />
              </div>
            </div>
            <div className="mt-2 ml-0.5 flex items-center gap-2">
              <button
                className={`flex cursor-pointer items-center justify-center rounded-[2px] border p-[3.5px] transition-all duration-300 hover:brightness-95 ${hasTv ? 'border-blue-600 bg-blue-600' : 'border-neutral-400 bg-white'}`}
                onClick={() => setHasTv(!hasTv)}
              >
                <Check
                  className={`h-3 w-3 ${hasTv ? 'text-white' : 'text-neutral-500'}`}
                />
              </button>
              <p className="text-sm text-neutral-500">O quarto possui TV?</p>
            </div>
            <div className="mt-2 ml-0.5 flex items-center gap-2">
              <button
                className={`flex cursor-pointer items-center justify-center rounded-[2px] border p-[3.5px] transition-all duration-300 hover:brightness-95 ${hasWifi ? 'border-blue-600 bg-blue-600' : 'border-neutral-400 bg-white'}`}
                onClick={() => setHasWifi(!hasWifi)}
              >
                <Check
                  className={`h-3 w-3 ${hasWifi ? 'text-white' : 'text-neutral-500'}`}
                />
              </button>
              <p className="text-sm text-neutral-500">O quarto possui WiFi?</p>
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
