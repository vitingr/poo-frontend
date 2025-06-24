import type { FC } from 'react'

import { motor } from '@/instances/motor'

import { LatestCheckinsTable } from '../Table'

export const LatestCheckins: FC = async () => {
  const { data } = await motor.checkins.getAllCheckins({ token: '' })

  return (
    <section className="flex w-full flex-col gap-12 bg-neutral-50 px-3 py-10 sm:px-4 md:px-6 lg:p-8 lg:py-12 xl:p-12">
      <div className="flex flex-col gap-8 rounded-md border border-neutral-200 bg-white px-6 pt-6 pb-2">
        <article className="flex w-full flex-col gap-1">
          <h2 className="text-3xl font-semibold">Hoje</h2>
          <p className="text-sm text-neutral-500">
            Veja abaixo os ultimos registros de checkin que foram registrados no
            dia de hoje
          </p>
        </article>
        <LatestCheckinsTable data={data} />
      </div>
    </section>
  )
}
