'use client'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function ProfitsChart() {
  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 240
    },
    title: {
      text: ''
    },
    series: [
      {
        type: 'line',
        name: 'Valor em mil reais',
        data: [100, 60, 55, 20, 80, 90, 120, 40, 80, 82, 140, 76],
        color: '#4f46e5'
      }
    ]
  }

  return (
    <div className="max-h-[320px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
