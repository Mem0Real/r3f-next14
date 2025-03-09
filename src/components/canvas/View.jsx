'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, useTexture, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color }) => {
  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <ambientLight />
      <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
      <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 6]} />
    </Suspense>
  )
}

export const Dome = ({ url, ...props }) => {
  const dome = useTexture(url)

  return (
    <group {...props}>
      <mesh>
        <sphereGeometry args={[50, 32, 32]} />
        <meshStandardMaterial map={dome} side={2} />
      </mesh>
    </group>
  )
}
const View = forwardRef(({ children, orbit, zoom = false, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && (
            <OrbitControls
              enableZoom={zoom}
              enablePan={false}
              dampingFactor={0.2}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 1.8}
            />
          )}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
