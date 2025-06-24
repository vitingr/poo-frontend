import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { payload, token } = await req.json()

    const { data, status } = await motor.reservations.createReservation({
      payload,
      token
    })

    if (status !== 201) {
      return NextResponse.json(
        { message: 'Cannot create a new Reservation.' },
        { status: 500 }
      )
    }

    if (payload.reservationType === 'instant-booking') {
      const { status: reservationStatus } = await motor.checkins.createCheckin({
        payload: {
          room_id: payload.room_id,
          guest_id: payload.guest_id,
          checkin_date: payload.start_date,
          checkout_estimated: payload.end_date,
          reservation_id: data?.id
        },
        token: ''
      })

      if (reservationStatus !== 201) {
        return NextResponse.json(
          { message: 'Cannot create a new Checkin.' },
          { status: 500 }
        )
      }

      return NextResponse.json({ status: 201 })
    }

    return NextResponse.json({ status: 201 })
  } catch (err) {
    console.error({
      'POST/api/reservations/create-reservation': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
