'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Image from 'next/image'
import WorkSliderBtns from '@/components/ui/WorkSliderBtn'

// Import extracted components
import ProjectDisplay from '@/components/ProjectDisplay'
import TooltipButton from '@/components/TooltipButton'

// Projects data (can be moved to a separate data file if preferred)
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'project 1 description',
    stack: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description: 'project 2 description',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  // Other projects...
]

const Work = () => {
  const [project, setProject] = useState(
    projects[0]
  )

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <ProjectDisplay project={project} />
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='w-full'
                >
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={item.image}
                        fill
                        className='object-cover'
                        alt={`${item.title} thumbnail`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%-22px] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[44px] w-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
