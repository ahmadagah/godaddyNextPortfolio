import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const serviceItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.6,
      ease: 'easeIn',
    },
  },
}

const ServiceItem = ({
  num,
  title,
  description,
  href,
}) => (
  <motion.div
    variants={serviceItemVariants}
    initial='hidden'
    animate='visible'
    className='flex-1 flex flex-col justify-start gap-6 group'
  >
    <div className='w-full flex justify-between items-center'>
      <div className='text-6xl font-extrabold group-hover:text-white transition-all duration-500'>
        {num}
      </div>
      <Link
        href={href}
        className='w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 shadow-lg'
      >
        <BsArrowDownRight className='text-primary text-2xl lg:text-3xl' />
      </Link>
    </div>
    <h2 className='text-3xl lg:text-5xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500'>
      {title}
    </h2>
    <p className='text-white/70 leading-relaxed text-lg'>
      {description}
    </p>
    <div className='border-b border-white/20 w-full mt-4'></div>
  </motion.div>
)

export default ServiceItem
