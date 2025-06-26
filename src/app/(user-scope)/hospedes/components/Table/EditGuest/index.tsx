'use client'

import axios from 'axios'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { InputField } from '@/components/toolkit/Fields/InputField'
import { Modal } from '@/components/toolkit/Modal'
import { Spin } from '@/components/toolkit/Spin'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useGetAllGuests } from '@/hooks/swr/useGetAllGuests'
import { zodResolver } from '@hookform/resolvers/zod'

import { Pencil } from '../../icons/Pencil'
import { updateGuestSchema } from './schema'
import type { UpdateGuestInputs } from './schema'
import type { EditGuestProps } from './types'

export const EditGuest: FC<EditGuestProps> = ({ isOpen, setIsOpen, guest }) => {
  const [date, setDate] = useState<Date>(new Date(guest.birth_date))

  const { mutate } = useGetAllGuests()

  const formMethods = useForm<UpdateGuestInputs>({
    resolver: zodResolver(updateGuestSchema),
    defaultValues: {
      address: guest.address,
      document: guest.document,
      email: guest.email,
      full_name: guest.full_name,
      phone: guest.phone
    }
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit: SubmitHandler<UpdateGuestInputs> = async payload => {
    try {
      if (!date) {
        toast.error(
          'Ops... Você deve preencher todos os campos antes de continuar!'
        )
        return
      }

      const { status } = await axios.post('/api/guests/update-guest', {
        payload: {
          ...payload,
          birth_date: date.toISOString().slice(0, 19)
        },
        token: '',
        guestId: guest.id
      })

      if (status !== 200) {
        toast.error('Não foi possível cadastrar o hóspede...')
        return
      }

      await mutate()
      setIsOpen(false)
      toast.success('Hóspede atualizado com sucesso!')
      reset()
    } catch (createGuestErr) {
      console.error(createGuestErr)
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex w-full max-w-xl flex-col gap-8 rounded-md bg-white px-8 pt-12 pb-8">
        <article className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">
            Formulário de Edição de Hóspedes
          </h2>
          <p className="text-sm text-neutral-500">
            Aqui você pode alterar as informações referentes ao hóspede
            selecionado, como email, nome, etc...
          </p>
        </article>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <article className="flex w-full flex-col gap-3">
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
              id="address"
              label="Endereço"
              maxLength={60}
              minLength={2}
              placeholder="Insira aqui o endereço do hóspede que será cadastrado"
              spellCheck={false}
              {...register('address')}
              variant="secondary"
            />
            <div className="flex w-full flex-col gap-2 text-left">
              <p className="text-left text-sm text-neutral-700">
                Data de Nascimento
              </p>
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
                  <figure className="top">
                    <Pencil />
                  </figure>
                  <div className="paper"></div>
                </div>
              </div>
              <p className="text-white">Atualizar informações</p>{' '}
              {isSubmitting ? <Spin /> : null}
            </button>
          </article>
        </form>
      </div>
    </Modal>
  )
}
