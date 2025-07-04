import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await motor.guests.getAllGuests({ token: '' })

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/guests/get-all-guests': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any guest found' },
      { status: 500 }
    )
  }
}
