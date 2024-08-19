import ServiceItem from './ServiceItem'
import { motion } from 'framer-motion'

const ServicesList = ({ services }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24'
  >
    {services.map((service, index) => (
      <ServiceItem
        key={index}
        {...service}
      />
    ))}
  </motion.div>
)

export default ServicesList
