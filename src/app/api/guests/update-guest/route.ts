import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { guestId, payload, token } = await req.json()

    const { status } = await motor.guests.updateGuest({
      payload,
      token,
      guestId
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot update this Guest.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'PUT/api/guests/update-guest': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
