import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const GET = async (req: NextRequest) => {
  try {
    const { data } = await motor.checkins.getAllCheckins({ token: '' })

    return NextResponse.json(data, { status: 200 })
  } catch (err) {
    console.error({
      'GET/api/checkouts/get-all-checkins': err.message
    })

    return NextResponse.json(
      { message: 'Error! Any checkin found' },
      { status: 500 }
    )
  }
}
