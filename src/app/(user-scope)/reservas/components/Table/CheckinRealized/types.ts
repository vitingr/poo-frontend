import type { SetStateAction } from 'react'
import type React from 'react'

export interface CheckinRealizedProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
