import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { motor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { payload, token } = await req.json()

    const { status } = await motor.checkouts.createCheckout({
      payload,
      token
    })

    if (status !== 201) {
      return NextResponse.json(
        { message: 'Cannot create a new Checkout.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 201 })
  } catch (err) {
    console.error({
      'POST/api/checkouts/create-checkout': err.message
    })

    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode }
    )
  }
}
