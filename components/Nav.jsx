'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const Nav = () => {
  const pathname = usePathname()

  const links = useMemo(
    () => [
      { name: 'home', path: '/' },
      { name: 'services', path: '/services' },
      { name: 'resume', path: '/resume' },
      { name: 'work', path: '/work' },
      { name: 'contact', path: '/contact' },
    ],
    []
  )

  return (
    <nav className='flex gap-8'>
      {links.map(({ name, path }, index) => (
        <Link
          href={path}
          key={index}
          className={`capitalize font-medium hover:text-accent transition-all ${
            path === pathname
              ? 'text-accent border-b-2 border-accent'
              : ''
          }`}
          aria-current={
            path === pathname ? 'page' : undefined
          }
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
