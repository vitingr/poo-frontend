import type { FC } from 'react'

import { CreateDefaultReservationForm } from './CreateDefaultReservationForm'
import type { CreateCheckinFormProps } from './CreateDefaultReservationForm/types'
import { CreateInstantReservationForm } from './CreateInstantReservationForm'

export const ReservationForm: FC<CreateCheckinFormProps> = ({
  reservationType
}) => {
  return reservationType === 'instant-booking' ? (
    <CreateInstantReservationForm reservationType={reservationType} />
  ) : (
    <CreateDefaultReservationForm reservationType={reservationType} />
  )
}
