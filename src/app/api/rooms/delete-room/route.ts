import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { roomId, token } = await req.json()

    const { status } = await motor.hotelRooms.deleteHotelRoom({
      roomId,
      token
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot remove this study plan from the favourites.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error({
      'DELETE/api/rooms/delete-room': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
