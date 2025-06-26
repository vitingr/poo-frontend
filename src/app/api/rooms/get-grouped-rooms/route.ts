import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await motor.hotelRooms.getGroupedHotelRooms({ token: '' })

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/rooms/get-grouped-rooms': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any hotel room found' },
      { status: 500 }
    )
  }
}
