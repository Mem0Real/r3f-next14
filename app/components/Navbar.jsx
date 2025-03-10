import React from 'react'

const Navbar = () => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'Services', url: '/services' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ]
  return (
    <nav className='bg-gradient-to-r from-stone-700/90 via-stone-900/90 to-stone-700/90 border border-black rounded-xl w-[95%] lg:w-1/2 mx-auto mt-5 text-white'>
      <div className='flex justify-center items-center lg:gap-6'>
        {links.map(({ title, url }) => (
          <button
            key={title}
            className='hover:underline underline-offset-8 px-3 py-3 rounded cursor-pointer text-sm lg:text-base'
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
