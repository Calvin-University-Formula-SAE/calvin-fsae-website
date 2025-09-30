import Link from 'next/link'

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
  return (
    <div className="flex text-center">
        <Link href="/"><img src="chatgpt_logo.png" alt="Logo" className='w-25 h-25 align-middle'/></Link>
        {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all delay-100 text-neutral-50 hover:text-amber-300 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
    </div>
  )
}