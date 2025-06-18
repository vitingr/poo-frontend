'use client'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { getGuestsSpiderChartOptions } from '@/utils/components/highcharts/getSpiderChartOptions'

export default function WeeklyGuestsChart() {
  const options = getGuestsSpiderChartOptions({
    guestsActual: [1, 2, 3, 4, 5, 6, 7],
    guestsExpected: [2, 4, 6, 8, 10, 12, 14],
    labels: {
      actual: 'Atual',
      expected: 'Esperado'
    }
  })

  return (
    <div className="max-h-[280px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
