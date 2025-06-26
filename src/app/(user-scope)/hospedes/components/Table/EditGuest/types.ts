import type { SetStateAction } from 'react'

import type { Guest } from '@/types/models/guest'

export interface EditGuestProps {
  guest: Guest
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
