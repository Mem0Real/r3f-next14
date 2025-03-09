import React from 'react'

const Navbar = () => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'Services', url: '/services' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ]
  return (
    <nav className='bg-stone-900/90 border border-white rounded-3xl w-1/2 mx-auto mt-5 text-white'>
      <div className='flex justify-center items-center gap-6'>
        {links.map(({ title, url }) => (
          <button key={title} className='hover:underline underline-offset-8  px-3 py-3 rounded cursor-pointer'>
            {title}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
