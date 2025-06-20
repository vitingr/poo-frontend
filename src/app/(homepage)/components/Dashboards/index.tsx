import type { FC } from 'react'

import { Checkout } from '../icons/Checkout'
import { Door } from '../icons/Door'
import CheckinsChart from './CheckinsChart'
import OccupancyRateChart from './OccupancyRateChart'
import ProfitsChart from './ProfitChart'
import ReasonForBookingChart from './ReasonForBooking'
import { Staff } from './Staff'
import WeeklyGuestsChart from './WeeklyGuestsChart'

export const Dashboards: FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:p-12">
      <div className="flex w-full flex-col gap-8 2xl:flex-row">
        <div className="flex w-full flex-col gap-8 2xl:w-auto">
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <div className="flex w-full flex-col gap-4 2xl:max-w-[900px]">
              <div className="flex w-full flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6 2xl:w-auto 2xl:min-w-[260px]">
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
              <div className="flex w-full flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6 2xl:w-auto 2xl:min-w-[260px]">
                <figure>
                  <Checkout className="h-7 w-7 text-neutral-600" />
                </figure>
                <article className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">Check-ins Hoje</p>
                  <span className="text-2xl font-semibold">4</span>
                </article>
              </div>
            </div>
            <div className="4xl:min-w-[640px] flex w-full max-w-2xl flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
              <article className="flex flex-col gap-1">
                <p className="text-sm text-neutral-500">Check-Ins</p>
              </article>
              <CheckinsChart />
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <div className="4xl:min-w-[640px] flex w-full max-w-2xl flex-col rounded-md border border-neutral-200 bg-white p-6 pb-0">
              <article className="flex flex-col gap-1">
                <p className="text-sm text-neutral-500">Check-Ins</p>
              </article>
              <WeeklyGuestsChart />
            </div>
            <div className="flex w-full flex-col gap-4 2xl:w-auto">
              <div className="flex w-full flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6 2xl:w-auto 2xl:min-w-[260px]">
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
              <div className="flex w-full flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6 2xl:w-auto 2xl:min-w-[260px]">
                <figure>
                  <Checkout className="h-7 w-7 text-neutral-600" />
                </figure>
                <article className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">
                    Taxa de Ocupação Atual
                  </p>
                  <span className="text-2xl font-semibold">83%</span>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-h-[665px] w-full flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-3">
          <article className="flex flex-col gap-1">
            <p className="text-base font-normal text-neutral-600 lg:text-xl">
              <span className="bg-gradient-to-r from-fuchsia-600 via-indigo-500 to-indigo-600 bg-clip-text text-base font-semibold text-transparent lg:text-xl">
                Staff
              </span>
            </p>
            <p className="text-sm text-neutral-500">
              Aqui você pode conferir seus empregados insignificantes :D.
            </p>
          </article>
          <Staff />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 2xl:flex-row">
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
          <OccupancyRateChart />
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
