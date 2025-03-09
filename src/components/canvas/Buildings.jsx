import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Building1 = (props) => {
  const { scene } = useGLTF('/building1_centered.glb')

  //   useFrame((state, delta) => (scene.rotation.y += delta / 4))

  return <primitive object={scene} {...props} scale={0.24} position={[0, -1.48, 0]} />
}

export const Building2 = (props) => {
  const { scene } = useGLTF('/building2.glb')

  //   useFrame((state, delta) => (scene.rotation.y += delta / 4))

  return <primitive object={scene} {...props} scale={1} position={[0, -1.45, 0]} />
}

export const Building3 = (props) => {
  const { scene } = useGLTF('/building3.glb')

  //   useFrame((state, delta) => (scene.rotation.y += delta / 4))

  return <primitive object={scene} {...props} scale={0.14} position={[-0.2, -1.48, 0]} />
}
