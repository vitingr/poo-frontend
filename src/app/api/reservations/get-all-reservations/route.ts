import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await motor.reservations.getAllReservations({ token: '' })

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/reservations/get-all-reservations': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any reservation found' },
      { status: 500 }
    )
  }
}
