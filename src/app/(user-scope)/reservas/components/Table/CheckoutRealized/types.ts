import type { SetStateAction } from 'react'
import type React from 'react'

export interface CheckoutRealizedProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
