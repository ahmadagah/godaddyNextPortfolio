'use client'

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'

export const StairTransition = () => {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div>Stairs</div>
        </div>
      </AnimatePresence>
    </>
  )
}
