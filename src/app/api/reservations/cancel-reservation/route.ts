import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { reservationId, token } = await req.json()

    const { status } = await motor.reservations.cancelReservation({
      reservationId,
      token
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot cancel this reservation.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'PATCH/api/reservations/cancel-reservation': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
