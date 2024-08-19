'use client'

import ServicesList from '@/components/ServicesList'
import serviceData from '@/data/serviceData'

const Services = () => (
  <section className='min-h-screen flex flex-col justify-center py-16 pt-20'>
    <div className='container mx-auto px-6 lg:px-20'>
      <ServicesList services={serviceData} />
    </div>
  </section>
)

export default Services
