import { cva } from 'class-variance-authority'

export const labelVariants = cva(['my-1', 'text-left'], {
  variants: {
    variant: {
      primary: ['text-sm', 'text-slate-50'],
      secondary: ['text-sm', 'text-neutral-700']
    },
    error: {
      true: ['border-2', 'border-red-400'],
      false: []
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
