'use client'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function ReasonForBookingChart() {
  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      height: 240,
      events: {
        render() {
          const chart = this,
            series = chart.series[0]
          let customLabel = (chart as any).customLabel

          if (!customLabel) {
            ;(chart as any).customLabel = customLabel = chart.renderer
              .label(
                'Total<br/><strong>2 877 820</strong>',
                0,
                0,
                'rect',
                0,
                0,
                true
              )
              .css({
                color: '#000',
                textAlign: 'center',
                fontWeight: 'bold'
              })
              .attr({
                align: 'center'
              })
              .add()
          }

          const x = (series as any).center[0] + chart.plotLeft
          const y =
            (series as any).center[1] +
            chart.plotTop -
            customLabel.getBBox().height / 2

          customLabel.attr({
            x,
            y
          })

          customLabel.css({
            fontSize: `${(series as any).center[2] / 12}px`
          })
        }
      }
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}'
    },
    plotOptions: {
      pie: {
        innerSize: '75%',
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: '{point.name}'
          },
          {
            enabled: true,
            distance: -15,
            format: '{point.percentage:.0f}%',
            style: {
              fontSize: '0.9em'
            }
          }
        ]
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Registrations',
        data: [
          { name: 'EV', y: 23.9, color: '#818cf8' },
          { name: 'Hybrids', y: 12.6, color: '#4f46e5' },
          { name: 'Diesel', y: 37.0, color: '#3730a3' },
          { name: 'Petrol', y: 26.4, color: '#8b5cf6' }
        ]
      }
    ]
  }

  return (
    <div className="max-h-[240px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
