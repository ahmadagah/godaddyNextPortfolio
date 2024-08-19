'use client'

import { motion } from 'framer-motion'
import ContactInfoItem from '@/components/ContactInfoItem'
import ContactForm from '@/components/ContactForm'
import { contactInfo } from '@/data/contactInfoData'

const Contacts = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* Contact Form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <ContactForm />
          </div>
          {/* Contact Info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul>
              {contactInfo.map((item, index) => (
                <ContactInfoItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contacts
