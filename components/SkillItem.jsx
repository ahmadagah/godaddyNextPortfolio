import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import React from 'react'

const SkillItem = ({ icon, name }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
        <div className='text-6xl group-hover:text-accent transition-all duration-300'>
          {icon && React.createElement(icon)}
        </div>
      </TooltipTrigger>
      <TooltipContent className='capitalize'>
        {name}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default SkillItem
