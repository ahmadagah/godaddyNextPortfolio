'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import Nav from './Nav'
import Logo from './Logo' // Import the Logo component
import {
  useState,
  useEffect,
  useCallback,
} from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] =
    useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener(
      'scroll',
      handleScroll
    )
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [handleScroll])

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-8 xl:py-12 text-white z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        {/* Logo */}
        <Logo />{' '}
        {/* Use the Logo component here */}
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
