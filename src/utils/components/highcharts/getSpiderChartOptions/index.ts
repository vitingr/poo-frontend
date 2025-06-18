import type { Options } from 'highcharts'

import type { GuestsChartParams } from './types'

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

export const getGuestsSpiderChartOptions = ({
  guestsExpected,
  guestsActual,
  labels
}: GuestsChartParams): Options => {
  const hasData = guestsExpected.length > 0 || guestsActual.length > 0

  return {
    chart: {
      polar: true,
      type: 'area',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      },
      height: 280
    },
    credits: { enabled: false },
    accessibility: {
      description: 'Número de hóspedes alugando quartos por dia da semana'
    },
    title: { text: '' },
    pane: {
      size: '80%',
      background: [
        {
          backgroundColor: 'rgba(203, 213, 225, 0.1)',
          borderWidth: 0,
          outerRadius: '100%'
        },
        {
          backgroundColor: 'rgba(203, 213, 225, 0.2)',
          borderWidth: 0,
          outerRadius: '80%'
        },
        {
          backgroundColor: 'rgba(203, 213, 225, 0.1)',
          borderWidth: 0,
          outerRadius: '60%'
        },
        {
          backgroundColor: 'rgba(203, 213, 225, 0.2)',
          borderWidth: 0,
          outerRadius: '40%'
        },
        {
          backgroundColor: 'rgba(203, 213, 225, 0.1)',
          borderWidth: 0,
          outerRadius: '20%'
        }
      ]
    },
    xAxis: {
      categories: weekDays,
      tickmarkPlacement: 'on',
      lineWidth: 0,
      gridLineInterpolation: 'polygon',
      gridLineColor: '#CBD5E1',
      labels: {
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          fontWeight: '500',
          color: '#4B5563'
        }
      }
    },
    yAxis: {
      min: 0,
      gridLineInterpolation: 'polygon',
      gridLineColor: '#CBD5E1',
      lineWidth: 0,
      labels: {
        style: {
          color: '#6B7280',
          fontSize: '8px'
        }
      }
    },
    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    plotOptions: {
      series: {
        pointPlacement: 'on',
        lineWidth: 2,
        marker: {
          enabled: true
        }
      }
    },
    series: [
      {
        name: labels.expected,
        type: 'area',
        data: guestsExpected,
        color: '#3B82F6',
        fillColor: hasData ? 'rgba(59, 130, 246, 0.3)' : 'transparent'
      },
      {
        name: labels.actual,
        type: 'area',
        data: guestsActual,
        color: '#EAB308',
        fillColor: hasData ? 'rgba(234, 179, 8, 0.3)' : 'transparent'
      }
    ],
    responsive: {
      rules: [
        {
          condition: { maxWidth: 1024 },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            pane: { size: '60%' }
          }
        },
        {
          condition: { maxWidth: 340 },
          chartOptions: {
            pane: { size: '45%' }
          }
        }
      ]
    }
  }
}
