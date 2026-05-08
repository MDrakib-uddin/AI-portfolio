import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingNetwork = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Rotate slowly and add a floating effect
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.2;
      coreRef.current.rotation.z -= delta * 0.1;
    }
  });

  return (
    <group>
      {/* Outer abstract neural network cage */}
      <Icosahedron ref={meshRef} args={[2.5, 2]}>
        <meshStandardMaterial
          color="#3b82f6" // primary-like blue
          wireframe={true}
          emissive="#10b981" // emerald green accent for AI vibe
          emissiveIntensity={0.6}
          transparent
          opacity={0.6}
        />
      </Icosahedron>

      {/* Inner solid computing core */}
      <Icosahedron ref={coreRef} args={[1.2, 1]}>
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe={true}
          emissive="#ec4899"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
        />
      </Icosahedron>

      {/* Deep inner point */}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

export const Network3D = () => {
  return (
    <div className="w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] cursor-grab active:cursor-grabbing relative">
      <div className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/40 backdrop-blur border border-white/10 text-xs hidden sm:block pointer-events-none text-muted-foreground">
      </div>
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} dpr={[1, 2]}>
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#10b981" />

        {/* Dynamic Star background for extra depth */}
        <Stars radius={50} depth={20} count={1500} factor={3} saturation={0.5} fade speed={2} />

        <FloatingNetwork />

        {/* Smooth dragging controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5} // Restrict extreme top/bottom angles
        />
      </Canvas>
    </div>
  );
};

export default Network3D;
