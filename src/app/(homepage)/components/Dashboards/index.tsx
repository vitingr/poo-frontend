import type { FC } from 'react'

import { Checkout } from '../icons/Checkout'
import { Door } from '../icons/Door'
import CheckinsChart from './CheckinsChart'
import ProfitsChart from './ProfitChart'
import ReasonForBookingChart from './ReasonForBooking'
import WeeklyGuestsChart from './WeeklyGuestsChart'
import { Staff } from './Staff'

export const Dashboards: FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 p-12">
      <div className="flex w-full flex-row gap-8">
        <div className="flex w-auto flex-col gap-8">
          <div className="flex w-full gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex min-w-[260px] flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6">
                <figure>
                  <Door className="h-7 w-7 text-neutral-600" />
                </figure>
                <article className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">
                    Quartos disponíveis
                  </p>
                  <span className="text-2xl font-semibold">126</span>
                </article>
              </div>
              <div className="flex min-w-[260px] flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6">
                <figure>
                  <Checkout className="h-7 w-7 text-neutral-600" />
                </figure>
                <article className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">Check-ins Hoje</p>
                  <span className="text-2xl font-semibold">4</span>
                </article>
              </div>
            </div>
            <div className="flex w-full max-w-2xl flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0 lg:min-w-[640px]">
              <article className="flex flex-col gap-1">
                <p className="text-sm text-neutral-500">Check-Ins</p>
              </article>
              <CheckinsChart />
            </div>
          </div>
          <div className="flex w-full gap-8">
            <div className="flex w-full max-w-2xl flex-col rounded-md border border-neutral-200 bg-white p-6 pb-0 lg:min-w-[640px]">
              <article className="flex flex-col gap-1">
                <p className="text-sm text-neutral-500">Check-Ins</p>
              </article>
              <WeeklyGuestsChart />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex min-w-[260px] flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6">
                <figure>
                  <Door className="h-7 w-7 text-neutral-600" />
                </figure>
                <article className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">
                    Tempo médio de estadia
                  </p>
                  <span className="text-2xl font-semibold">2 dias</span>
                </article>
              </div>
              <div className="flex min-w-[260px] flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6">
                <figure>
                  <Checkout className="h-7 w-7 text-neutral-600" />
                </figure>
                <article className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">Available Rooms</p>
                  <span className="text-2xl font-semibold">126</span>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-h-[665px] w-full flex-1 flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
          <article className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Staff</p>
          </article>
          <Staff />
        </div>
      </div>
      <div className="flex w-full gap-8">
        <div className="flex w-full flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
          <article className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Faturamento Atual</p>
          </article>
          <ProfitsChart />
        </div>
        <div className="flex w-full flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
          <article className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">
              Taxa de Ocupação por período
            </p>
          </article>
          <CheckinsChart />
        </div>
        <div className="flex w-full flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
          <article className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Motivo da Reserva</p>
          </article>
          <ReasonForBookingChart />
        </div>
      </div>
    </section>
  )
}
