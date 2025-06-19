'use client'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function OccupancyRateChart() {
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
        data: [80, 40, 30, 10, 68, 70, 90, 45, 47, 95, 50],
        color: '#4f46e5'
      }
    ]
  }

  return (
    <div className="max-h-[240px] w-full min-w-[300px] 2xl:min-w-[450px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
