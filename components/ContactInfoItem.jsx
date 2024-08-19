import React from 'react'

const ContactInfoItem = ({
  icon: Icon,
  title,
  description,
}) => (
  <li className='flex items-center gap-6 mb-4'>
    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
      <div className='text-[28px]'>
        <Icon />{' '}
        {/* Render the icon component here */}
      </div>
    </div>
    <div className='flex-1'>
      <p className='text-white/60'>{title}</p>
      <h3 className='text-xl'>{description}</h3>
    </div>
  </li>
)

export default ContactInfoItem
