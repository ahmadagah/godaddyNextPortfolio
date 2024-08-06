'use client'

import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import React, { Children } from 'react'
import { usePathname } from 'next/navigation'

const PageTransition = ({ Children }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: 'easeInOut',
          },
        }}
      />
      className="h-screen w-screen fixed
      bg-primary top-0 pointer-events-none"
      {Children}
    </AnimatePresence>
  )
}

export default PageTransition
