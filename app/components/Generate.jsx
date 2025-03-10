import { View } from '@/components/canvas/View'
import { buildingText1, buildingText2, buildingText3 } from '@/helpers/global'
import { Suspense, useEffect, useState } from 'react'
import { Button } from './ui/button'

export const Generate = ({ id, children, active, setActive }) => {
  let text

  switch (id) {
    case 1:
      text = buildingText1
      break
    case 2:
      text = buildingText2
      break
    case 3:
      text = buildingText3
      break
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        className={`flex flex-col ${!active && id % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start justify-center py-8 md:py-16 lg:py-0 gap-6 lg:gap-24 px-24`}
      >
        {!active && <TextGenerator building={text} />}
        <div className='relative flex flex-col group'>
          <View
            orbit
            zoom={active !== null}
            className={`${active === id ? 'w-screen h-screen fixed top-0 left-0 z-10' : active ? 'hidden' : 'w-64 h-96 md:w-[30rem] lg:w-96 lg:h-[30rem] ring-4 ring-black'} ring-offset-4 z-10 rounded-3xl cursor-grab active:cursor-grabbing`}
          >
            <Suspense fallback={null}>{children}</Suspense>
          </View>
          <div
            className={`h-12 flex-col justify-center items-center text-3xl bottom-0 left-1/2 -translate-x-1/2 z-20 hidden group-hover:flex ${active ? 'fixed' : 'w-full absolute rounded-b-3xl'} overflow-clip`}
          >
            <Button
              variant={active ? 'outline' : 'ghost'}
              className='bg-stone-800 text-neutral-200'
              onClick={() => setActive((prev) => (prev !== null ? null : id))}
            >
              {active === id ? 'Leave Scene' : 'Enter Scene'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TextGenerator = ({ building }) => {
  return (
    <div className={`flex flex-col justify-center items-start gap-8 ps-4 lg:ps-16 py-12 lg:my-8`}>
      <h1 className='text-4xl font-bold'>{building.title}</h1>
      <h1 className='font-semibold'>{building.description}</h1>
    </div>
  )
}
