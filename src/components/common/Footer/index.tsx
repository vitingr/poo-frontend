import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="relative z-20 w-full border-t-2 border-neutral-200 bg-neutral-100 px-4 py-8 sm:py-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-6 lg:max-w-6xl">
        <p className="w-full text-[13px] font-light sm:text-xs lg:text-sm">
          Copyright © 2025 Vitor Gabriel Silva & Matheus Cruz Rocha All rights
          reserved.
        </p>
        <p className="w-full text-right text-[13px] font-light sm:text-xs lg:text-sm">
          Brazil
        </p>
      </div>
    </footer>
  )
}
