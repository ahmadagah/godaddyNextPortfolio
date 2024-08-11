'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'web development',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX design',
    description:
      'Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.',
    href: '',
  },
  {
    num: '03',
    title: 'branding',
    description:
      'We look at the bigger picture to create unique brand experiences that drive success.',
    href: '',
  },
  {
    num: '04',
    title: 'mobile apps',
    description:
      'Our versatile team of developers has experience working with a variety of mobile platforms.',
    href: '',
  },
  {
    num: '05',
    title: 'ecommerce',
    description:
      'We create a mobile app experience that taps into your audience and grows your business online.',
    href: '',
  },
  {
    num: '06',
    title: 'digital marketing',
    description:
      'We create a mobile app experience that taps into your audience and grows your business online.',
    href: '',
  },
]

import { motion } from 'framer-motion'

const Serives = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeIn',
            },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-row justify-center gap-6 group'
              >
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                <p className='text-white/60'>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Serives
