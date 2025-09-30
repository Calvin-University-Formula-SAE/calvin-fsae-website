'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/team': {
    name: 'Team',
  },
  '/car': {
    name: 'Car',
  },
  '/sponsors': {
    name: 'Sponsors',
  },
}

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <div className="flex items-center justify-between">
        <Link href="/"><img src="chatgpt_logo.png" alt="Logo" className='w-25 h-25 m-1 bg-white'/></Link>
        <div className="flex">
          {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = pathname === path
                return (
                  <Link
                    key={path}
                    href={path}
                    className={`transition-all delay-75 flex relative pr-8 m-1 text-md ${
                      isActive 
                        ? 'text-gray-500' 
                        : 'text-black hover:text-amber-300'
                    }`}
                  >
                    {name}
                  </Link>
                )
              })}
        </div>
    </div>
  )
}