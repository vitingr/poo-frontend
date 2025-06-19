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
        name: 'Check-ins',
        data: [1, 2, 3, 4, 5, 6],
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
