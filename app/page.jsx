'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Dome } from '@/components/canvas/View'
import { Ground } from '@/components/canvas/Ground'

import { buildingText1, buildingText2, buildingText3 } from '@/helpers/global'
import { Button } from './components/ui/button'

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

      <div className='grid grid-cols-1 justify-items-center w-full lg:w-[90%]'>
        <div
          className={`min-h-[95vh] grid grid-cols-1 ${!active && 'md:grid-cols-2'} items-center justify-items-center gap-24 px-24`}
        >
          {!active && <TextGenerator building={buildingText1} />}
          <div className='relative flex flex-col group'>
            <View
              orbit
              zoom={active !== null}
              className={`${active === 1 ? 'w-screen h-screen fixed top-0 left-0 z-10' : active ? 'hidden' : 'w-96 h-[30rem] ring-4'} ring-black ring-offset-4 z-10 rounded-3xl cursor-grab active:cursor-grabbing`}
            >
              <Suspense fallback={null}>
                <Building1 />
                <Common />
                <Dome url='/img/sky1HD.png' />
                <Ground />
              </Suspense>
            </View>
            <div
              className={`h-12 flex-col justify-center items-center text-3xl bottom-0 left-1/2 -translate-x-1/2 z-20 hidden group-hover:flex ${active ? 'fixed' : 'w-full absolute rounded-b-3xl'} overflow-clip`}
            >
              <Button
                variant={active ? 'outline' : 'ghost'}
                className='bg-stone-800 text-neutral-200'
                onClick={() => setActive((prev) => (prev !== null ? null : 1))}
              >
                {active ? 'Leave Scene' : 'Enter Scene'}
              </Button>
            </div>
          </div>
        </div>
        <div className='min-h-[95vh] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-24 px-24 overflow-hidden'>
          <div className='relative flex flex-col group'>
            <View
              orbit
              zoom={active !== null}
              className={`${active === 2 ? 'w-screen h-screen fixed top-0 left-0 z-10' : active ? 'hidden' : 'w-96 h-[30rem] ring-4'} ring-black ring-offset-4 z-10 rounded-3xl cursor-grab active:cursor-grabbing`}
            >
              <Suspense fallback={null}>
                <Building2 />
                <Common />
                <Dome url='/img/sky2HD.png' />
                <Ground />
              </Suspense>
            </View>
            <div
              className={`h-12 flex-col justify-center items-center text-3xl bottom-0 left-1/2 -translate-x-1/2 z-20 hidden group-hover:flex ${active ? 'fixed' : 'w-full absolute rounded-b-3xl'} overflow-clip`}
            >
              <Button
                variant={active ? 'outline' : 'ghost'}
                className='bg-stone-800 text-neutral-200'
                onClick={() => setActive((prev) => (prev !== null ? null : 2))}
              >
                {active ? 'Leave Scene' : 'Enter Scene'}
              </Button>
            </div>
          </div>
          <TextGenerator building={buildingText2} />
        </div>
        <div className='min-h-[95vh] grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-24 px-24 overflow-hidden'>
          <TextGenerator building={buildingText3} />
          <div className='relative flex flex-col group'>
            <View
              orbit
              zoom={active !== null}
              className={`${active === 3 ? 'w-screen h-screen fixed top-0 left-0 z-10' : active ? 'hidden' : 'w-96 h-[30rem] ring-4'} ring-black ring-offset-4 z-10 rounded-3xl cursor-grab active:cursor-grabbing`}
            >
              <Suspense fallback={null}>
                <Building3 />
                <Common />
                <Dome url='/img/sky3HD.png' />
                <Ground />
              </Suspense>
            </View>
            <div
              className={`h-12 flex-col justify-center items-center text-3xl bottom-0 left-1/2 -translate-x-1/2 z-20 hidden group-hover:flex ${active ? 'fixed' : 'w-full absolute rounded-b-3xl'} overflow-clip`}
            >
              <Button
                variant={active ? 'outline' : 'ghost'}
                className='bg-stone-800 text-neutral-200'
                onClick={() => setActive((prev) => (prev !== null ? null : 3))}
              >
                {active ? 'Leave Scene' : 'Enter Scene'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const TextGenerator = ({ building }) => {
  return (
    <div className='md:-mt-24 flex flex-col justify-center items-start gap-8 ps-16 py-12'>
      <h1 className='text-4xl font-bold'>{building.title}</h1>
      <h1 className='font-semibold'>{building.description}</h1>
    </div>
  )
}

const SceneViewer = ({ element }) => {
  return (
    <View className='w-screen h-screen left-0'>
      {element === 1 ? (
        <Suspense fallback={null}>
          <Building1 />
          <Common />
          <Dome url='/img/sky1HD.png' />
          <Ground />
        </Suspense>
      ) : element === 2 ? (
        <Suspense fallback={null}>
          <Building2 />
          <Common />
          <Dome url='/img/sky2HD.png' />
          <Ground />
        </Suspense>
      ) : (
        element === 3 && (
          <Suspense fallback={null}>
            <Building3 />
            <Common />
            <Dome url='/img/sky3HD.png' />
            <Ground />
          </Suspense>
        )
      )}
    </View>
  )
}
