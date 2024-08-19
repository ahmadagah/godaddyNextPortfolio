import React from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const TooltipButton = ({ href, icon, label }) => (
  <Link
    href={href}
    aria-label={label}
  >
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center group'>
          <div className='text-white text-3xl group-hover:text-accent'>
            {icon}
          </div>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  </Link>
)

export default TooltipButton
