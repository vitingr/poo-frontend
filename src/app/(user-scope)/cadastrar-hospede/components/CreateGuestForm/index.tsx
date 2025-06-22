'use client'

'use client'

import axios from 'axios'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { InputField } from '@/components/toolkit/Fields/InputField'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateGuestInputs } from './schema'
import { createGuestSchema } from './schema'

export const CreateGuestForm: FC = () => {
  const [date, setDate] = useState<Date>()

  const formMethods = useForm<CreateGuestInputs>({
    resolver: zodResolver(createGuestSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit: SubmitHandler<CreateGuestInputs> = async payload => {
    try {
      const { status } = await axios.post('/api/guests/create-guest', {
        payload: { ...payload, birth_date: date },
        token: ''
      })

      if (status !== 200) {
        toast.error('Não foi possível cadastrar o hóspede...')
        return
      }

      toast.success('Hóspede cadastrado com sucesso!')
      reset()
    } catch (createGuestErr) {
      console.error(createGuestErr)
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
            <InputField
              id="full_name"
              label="Nome do Hóspede"
              maxLength={140}
              minLength={2}
              placeholder="Insira aqui o nome do hóspede que será cadastrado"
              spellCheck={false}
              {...register('full_name')}
              variant="secondary"
            />
            <InputField
              id="email"
              label="Email"
              maxLength={140}
              minLength={4}
              placeholder="Insira aqui o email do hóspede que será cadastrado"
              spellCheck={false}
              type="email"
              {...register('email')}
              variant="secondary"
            />
            <InputField
              id="document"
              label="Documento (RG ou CPF)"
              maxLength={18}
              minLength={4}
              placeholder="Insira aqui o CPF ou RG do hóspede"
              spellCheck={false}
              {...register('document')}
              variant="secondary"
            />
            <InputField
              id="phone"
              label="Telefone"
              maxLength={14}
              minLength={9}
              placeholder="Insira aqui o telefone do hóspede que será cadastrado"
              spellCheck={false}
              {...register('phone')}
              variant="secondary"
            />
            <InputField
              id="phone"
              label="Endereço"
              maxLength={14}
              minLength={9}
              placeholder="Insira aqui o endereço do hóspede que será cadastrado"
              spellCheck={false}
              {...register('address')}
              variant="secondary"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm text-neutral-700">Data de Nascimento</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="data-[empty=true]:text-muted-foreground flex h-[42px] w-full items-center justify-start !py-2 text-left font-normal"
                    data-empty={!date}
                    variant="outline"
                  >
                    <CalendarIcon />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" onSelect={setDate} selected={date} />
                </PopoverContent>
              </Popover>
            </div>
            <button
              className={`continue-application mt-6 transition-all duration-300 ${isSubmitting ? 'brightness-95' : ''}`}
              disabled={isSubmitting}
              type="submit"
            >
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
