import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { roomId, payload, token } = await req.json()

    const { status } = await motor.hotelRooms.updateHotelRoom({
      payload,
      token,
      roomId
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot update this Hotel Room.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'PUT/api/rooms/update-room': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
