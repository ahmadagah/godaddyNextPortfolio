import DownloadButton from './DownloadButton'
import Social from './Social'

const HeroText = () => (
  <div className='text-center xl:text-left mt-8 xl:mt-0'>
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
      A developer with a knack for solving complex
      problems and a passion for creating
      beautiful, responsive web applications. My
      journey in coding started 3 years ago. I
      combine technical expertise with a strong
      understanding of user experience to deliver
      solutions that not only work but delight
      users. Whether it&apos;s building a
      high-performance backend or designing an
      intuitive frontend, I bring creativity and
      precision to every project.
    </p>
    <div className='flex flex-col sm:flex-row items-center gap-6'>
      <DownloadButton />
      <Social
        containerStyles='flex gap-4 justify-center xl:justify-start'
        iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
      />
    </div>
  </div>
)

export default HeroText
