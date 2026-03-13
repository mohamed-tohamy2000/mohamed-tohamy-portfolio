import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Float } from "@react-three/drei";
import { useRef } from "react";

function OfficeChairModel() {
  const groupRef = useRef(null);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.35;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.95, 0]} castShadow>
        <boxGeometry args={[1.25, 0.22, 1.2]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.2} roughness={0.45} />
      </mesh>

      <mesh position={[0, 1.45, -0.42]} castShadow>
        <boxGeometry args={[1.22, 0.95, 0.18]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.15} roughness={0.42} />
      </mesh>

      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.6, 24]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.35} />
      </mesh>

      <mesh position={[0, 0.3, 0]} rotation={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.62, 0.08, 30]} />
        <meshStandardMaterial color="#334155" metalness={0.4} roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function ThreeDViewer() {
  return (
    <div className="viewer-container h-[300px] w-full overflow-hidden rounded-2xl border border-base-300/80 bg-base-100/55 backdrop-blur">
      <Canvas shadows camera={{ position: [2.1, 1.8, 2.4], fov: 50 }}>
        <ambientLight intensity={0.65} />
        <directionalLight
          castShadow
          position={[3, 5, 3]}
          intensity={1.15}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-2, 2, -2]} intensity={0.35} />

        <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.45}>
          <OfficeChairModel />
        </Float>

        <ContactShadows
          position={[0, -0.02, 0]}
          opacity={0.45}
          scale={6}
          blur={2.2}
          far={4}
        />

        <OrbitControls
          enablePan={false}
          minDistance={1.6}
          maxDistance={4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.75}
        />
      </Canvas>
    </div>
  );
}
