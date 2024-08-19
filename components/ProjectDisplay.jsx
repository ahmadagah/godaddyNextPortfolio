import React from 'react'
import TooltipButton from './TooltipButton'
import {
  BsArrowUpRight,
  BsGithub,
} from 'react-icons/bs'

const ProjectDisplay = ({ project }) => {
  const {
    num,
    category,
    description,
    stack,
    live,
    github,
  } = project

  return (
    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
      <div className='flex flex-col gap-[30px] h-[50%]'>
        <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
          {num}
        </div>
        <div>
          <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
            {category} Project
          </h2>
          <p className='text-white/60'>
            {description}
          </p>
          <ul className='flex gap-4'>
            {stack.map((stackItem, index) => (
              <li
                key={index}
                className='text-xl text-accent'
              >
                {stackItem.name}
                {index !== stack.length - 1 &&
                  ', '}
              </li>
            ))}
          </ul>
          <div className='border border-white/20'></div>
          <div className='flex items-center gap-4'>
            <TooltipButton
              href={live}
              icon={<BsArrowUpRight />}
              label='Live Project'
            />
            <TooltipButton
              href={github}
              icon={<BsGithub />}
              label='Github Repository'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay
