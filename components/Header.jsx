import Link from 'next/link'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 py-8 xl:py-12 text-white z-50 shadow-md'>
      <div className='w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Ahmad
            <span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
