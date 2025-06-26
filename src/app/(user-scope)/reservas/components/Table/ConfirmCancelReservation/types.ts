import type { SetStateAction } from 'react'
import type React from 'react'

import type { Reservation } from '@/types/models/reservation'

export interface ConfirmCancelReservationProps {
  isOpen: boolean
  reservation: Reservation
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
