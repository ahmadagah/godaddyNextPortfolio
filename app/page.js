import MyComponent from '@/components/MyComponent'
import HeroText from '@/components/HeroText'
import PhotoSection from '@/components/PhotoSection'
import Stats from '@/components/Stats'
import ScriptsLoader from '@/components/ScriptsLoader'

const Home = () => {
  return (
    <>
      <ScriptsLoader />

      {/* MyComponent should now cover the entire screen */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <MyComponent />
      </div>

      {/* Main content */}
      <section className='relative z-10 min-h-screen flex flex-col justify-center'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col-reverse xl:flex-row items-center justify-between xl:py-24'>
            <HeroText />
            <PhotoSection />
          </div>
        </div>
        <Stats />
      </section>
    </>
  )
}

export default Home;
