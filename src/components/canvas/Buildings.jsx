import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Building1 = (props) => {
  const { scene } = useGLTF('/building1.glb')

  //   useFrame((state, delta) => (scene.rotation.y += delta / 4))

  return <primitive object={scene} {...props} scale={0.2} position={[0, -1.5, 0]} />
}

export const Building2 = (props) => {
  const { scene } = useGLTF('/building2.glb')

  //   useFrame((state, delta) => (scene.rotation.y += delta / 4))

  return <primitive object={scene} {...props} scale={1} position={[0, -1.5, 0]} />
}

export const Building3 = (props) => {
  const { scene } = useGLTF('/building3.glb')

  //   useFrame((state, delta) => (scene.rotation.y += delta / 4))

  return <primitive object={scene} {...props} scale={0.08} position={[0, -1.5, 0]} />
}
