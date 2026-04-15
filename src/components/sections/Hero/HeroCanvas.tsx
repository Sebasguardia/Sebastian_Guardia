import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

/**
 * HeroCanvas — fondo 3D del Hero usando Three.js.
 * Stars (partículas) + grid wireframe tipo "Acid Warp Room"
 */
export const HeroCanvas = () => (
  <Canvas camera={{ position: [0, 0, 5] as [number, number, number], fov: 75 }}>
    {/* Partículas ambiente */}
    <Stars
      radius={100}
      depth={50}
      count={800}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />

    {/* Grid 3D brutalista flotando */}
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={[0, 0, -2] as [number, number, number]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshBasicMaterial
          color="#E8FF00"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>
    </Float>

    {/* Segundo plano: esfera puntual estilo "Matrix" */}
    <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh position={[4, -2, -5] as [number, number, number]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#E8FF00"
          wireframe
          transparent
          opacity={0.03}
        />
      </mesh>
    </Float>
  </Canvas>
);
