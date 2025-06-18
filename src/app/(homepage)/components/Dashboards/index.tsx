import type { FC } from 'react'

import { Checkout } from '../icons/Checkout'
import { Door } from '../icons/Door'
import CheckinsChart from './CheckinsChart'
import WeeklyGuestsChart from './WeeklyGuestsChart'

export const Dashboards: FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 p-12">
      <div className="flex w-full gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex min-w-[260px] flex-col gap-4 rounded-md border border-neutral-200 bg-white p-6">
            <figure>
              <Door className="h-7 w-7 text-neutral-600" />
            </figure>
            <article className="flex flex-col gap-1">
              <p className="text-sm text-neutral-500">Available Rooms</p>
              <span className="text-2xl font-semibold">126</span>
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
        <div className="flex w-full max-w-2xl flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
          <article className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Check-Ins</p>
          </article>
          <CheckinsChart />
        </div>
      </div>
      <div className="flex w-full gap-8">
        <div className="flex w-full max-w-2xl flex-col gap-8 rounded-md border border-neutral-200 bg-white p-6 pb-0">
          <article className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Check-Ins</p>
          </article>
          <WeeklyGuestsChart />
        </div>
      </div>
    </section>
  )
}
