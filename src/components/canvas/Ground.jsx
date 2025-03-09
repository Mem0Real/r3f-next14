import { CylinderGeometry } from 'three'

export const Ground = () => {
  return (
    <mesh position={[0, -1.5, 0]}>
      <cylinderGeometry args={[10, 10, 0, 32]} />
      <meshStandardMaterial color={'grey'} />
    </mesh>
  )
}
