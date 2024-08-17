import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Script from 'next/script'
import MyComponent from '@/components/MyComponent'
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <>
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js'
        strategy='afterInteractive'
      />

      {/* MyComponent should now cover the entire screen */}
      <MyComponent />

      {/* Main content */}
      <section className='relative z-10 min-h-screen flex flex-col justify-center'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col-reverse xl:flex-row items-center justify-between xl:py-24'>
            {/* Text content */}
            <div className='text-center xl:text-left order-2 xl:order-none mt-8 xl:mt-0'>
              <span className='text-xl text-gray-300'>
                Software Developer
              </span>
              <h1 className='text-4xl sm:text-5xl font-bold text-white mt-4'>
                Hello I&apos;m <br />
                <span className='text-accent'>
                  Ahmad Agah
                </span>
              </h1>
              <p className='max-w-[500px] mx-auto xl:mx-0 mt-4 mb-9 text-white/80 leading-relaxed text-justify'>
                A developer with a knack for
                solving complex problems and a
                passion for creating beautiful,
                responsive web applications. My
                journey in coding started 3 years
                ago. I combine technical expertise
                with a strong understanding of
                user experience to deliver
                solutions that not only work but
                delight users. Whether it's
                building a high-performance
                backend or designing an intuitive
                frontend, I bring creativity and
                precision to every project.
              </p>
              <div className='flex flex-col sm:flex-row items-center gap-6'>
                <Button
                  className='uppercase flex items-center gap-2'
                  size='lg'
                  variant='outline'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
                <div className='mt-6 sm:mt-0'>
                  <Social
                    containerStyles='flex gap-4 justify-center xl:justify-start'
                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
                </div>
              </div>
            </div>

            {/* Placeholder for Photo or any other content */}
            <div className='order-1 xl:order-none mb-8 xl:mb-0'>
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  )
}

export default Home
