'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Dome } from '@/components/canvas/View'
import { Ground } from '@/components/canvas/Ground'

import { Generate } from './components/Generate'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Building1 = dynamic(() => import('@/components/canvas/Buildings').then((mod) => mod.Building1), { ssr: false })
const Building2 = dynamic(() => import('@/components/canvas/Buildings').then((mod) => mod.Building2), { ssr: false })
const Building3 = dynamic(() => import('@/components/canvas/Buildings').then((mod) => mod.Building3), { ssr: false })

export default function Page() {
  const [active, setActive] = useState(null)

  return (
    <main className='w-full flex flex-col justify-between items-center gap-12 bg-stone-300'>
      <Navbar />

      <div className='flex flex-col justify-center items-center gap-36 py-16 lg:w-[90%] 2xl:w-[70%]'>
        <Generate id={1} active={active} setActive={setActive}>
          <Building1 />
          <Common />
          <Dome url='/img/sky1HD.png' />
          <Ground />
        </Generate>
        <Generate id={2} active={active} setActive={setActive}>
          <Building2 />
          <Common />
          <Dome url='/img/sky2HD.png' />
          <Ground />
        </Generate>
        <Generate id={3} active={active} setActive={setActive}>
          <Building3 />
          <Common />
          <Dome url='/img/sky3HD.png' />
          <Ground />
        </Generate>
      </div>
    </main>
  )
}
