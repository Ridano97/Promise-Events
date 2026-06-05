"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";

const petalPositions = Array.from({ length: 18 }, (_, index) => {
  const angle = (index / 18) * Math.PI * 2;
  const radius = index % 2 ? 1.34 : 1.02;
  return {
    angle,
    position: [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.72, 0],
    scale: index % 3 === 0 ? 0.78 : 0.58,
  };
});

function FloralOrb() {
  return (
    <Float speed={1.2} rotationIntensity={0.55} floatIntensity={0.75}>
      <group rotation={[0.18, -0.42, 0.12]}>
        <mesh>
          <torusGeometry args={[1.18, 0.012, 16, 120]} />
          <meshStandardMaterial color="#c6a56a" metalness={0.84} roughness={0.22} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.18, 0.008, 16, 120]} />
          <meshStandardMaterial color="#fffdf8" metalness={0.4} roughness={0.2} />
        </mesh>
        {petalPositions.map((petal, index) => (
          <mesh
            key={index}
            position={petal.position}
            rotation={[0.35, 0.2, petal.angle]}
            scale={[petal.scale, petal.scale * 0.36, petal.scale * 0.16]}
          >
            <sphereGeometry args={[0.18, 24, 16]} />
            <meshStandardMaterial
              color={index % 4 === 0 ? "#8f0d17" : "#fff7ec"}
              metalness={0.12}
              roughness={0.38}
            />
          </mesh>
        ))}
        <mesh position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshStandardMaterial color="#c6a56a" metalness={0.9} roughness={0.18} />
        </mesh>
      </group>
    </Float>
  );
}

export default function LuxuryScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.8], fov: 38 }}>
      <ambientLight intensity={1.7} />
      <directionalLight position={[3, 2, 5]} intensity={2.4} />
      <FloralOrb />
      <Environment preset="city" />
    </Canvas>
  );
}
