import axios from 'axios'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type FC, useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { SelectField } from '@/components/toolkit/Fields/SelectField'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useGetAllGuests } from '@/hooks/swr/useGetAllGuests'
import { useGetAllRooms } from '@/hooks/swr/useGetAllRooms'
import type { HotelRoom } from '@/types/models/hotelRoom'
import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateCheckinInputs } from './schema'
import { createCheckinSchema } from './schema'
import type { CreateCheckinFormProps } from './types'

export const CreateInstantReservationForm: FC<CreateCheckinFormProps> = ({
  reservationType
}) => {
  const [date, setDate] = useState<Date>()

  const formMethods = useForm<CreateCheckinInputs>({
    resolver: zodResolver(createCheckinSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: {}
  } = formMethods

  const { guests } = useGetAllGuests()
  const { rooms } = useGetAllRooms()

  const guestOptions =
    guests?.map(guest => ({
      label: guest.full_name,
      value: guest.id
    })) || []

  const hotelRoomsOptions =
    rooms?.map((room: HotelRoom) => ({
      label: `${room.room_code} - ${room.floor} andar`,
      value: room.id
    })) || []

  const onSubmit: SubmitHandler<CreateCheckinInputs> = async ({
    room_id,
    guest_id
  }) => {
    try {
      const { status } = await axios.post(
        '/api/reservations/create-reservation',
        {
          payload: {
            room_id,
            guest_id,
            start_date: new Date().toISOString().slice(0, 19),
            end_date: date.toISOString().slice(0, 19)
          },
          token: ''
        }
      )
      if (status !== 200) {
        toast.error('Não foi possível realizar a reserva...')
        return
      }

      toast.success('Reserva realizada com sucesso!')
      reset()
      setDate(null)
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
            <div className="flex w-full flex-col">
              <SelectField
                id="guest_id"
                label="Hóspede que está realizando a reserva do quarto"
                name="guest_id"
                options={guestOptions}
                variant="secondary"
                {...register('guest_id')}
              />
              <Link
                className="-mt-0.5 text-xs text-blue-500 transition-all duration-300 hover:text-indigo-500"
                href="/cadastrar-hospede"
              >
                Hóspede ainda não está cadastrado? clique aqui.
              </Link>
            </div>

            <div className="mt-1 w-full">
              <SelectField
                id="room_code"
                label="Número do Quarto"
                name="room_code"
                options={hotelRoomsOptions}
                variant="secondary"
                {...register('room_id')}
              />
            </div>

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
                    {date ? (
                      format(date, 'PPP')
                    ) : (
                      <span>Quando o hóspede irá embora?</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" onSelect={setDate} selected={date} />
                </PopoverContent>
              </Popover>
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
              Realizar nova reserva
            </button>
          </article>
        </form>
      </div>
    </section>
  )
}
