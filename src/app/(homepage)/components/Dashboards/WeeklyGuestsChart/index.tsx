'use client'

import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'

export default function WeeklyGuestsChart() {
  const data = [
    {
      subject: 'Segunda',
      A: 60,
      B: 110,
      fullMark: 150
    },
    {
      subject: 'Terça',
      A: 90,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'Quarta',
      A: 85,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'Quinta',
      A: 70,
      B: 100,
      fullMark: 150
    },
    {
      subject: 'Sexta',
      A: 110,
      B: 90,
      fullMark: 150
    },
    {
      subject: 'Sábado',
      A: 115,
      B: 85,
      fullMark: 150
    },
    {
      subject: 'Domingo',
      A: 105,
      B: 85,
      fullMark: 150
    }
  ]

  return (
    <ResponsiveContainer height={270} width="100%">
      <RadarChart cx="50%" cy="50%" data={data} outerRadius="85%">
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
        <PolarRadiusAxis angle={30} tick={{ fontSize: 10 }} />
        <Radar
          dataKey="A"
          fill="#8884d8"
          fillOpacity={0.5}
          name="Mike"
          stroke="#8884d8"
          strokeWidth={1.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
