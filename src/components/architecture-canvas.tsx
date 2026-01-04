"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function OrbitalNodes() {
  const nodes = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 120; i += 1) {
      points.push(
        new THREE.Vector3().setFromSphericalCoords(
          1.8,
          Math.acos(THREE.MathUtils.randFloatSpread(2)),
          THREE.MathUtils.randFloatSpread(Math.PI * 2),
        ),
      );
    }
    return points;
  }, []);

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(nodes.flatMap((p) => p.toArray())),
              3,
            ]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#7cf4ff"
          transparent
          opacity={0.8}
        />
      </points>
      <mesh rotation={[0.2, 0.1, 0.3]}>
        <torusKnotGeometry args={[0.7, 0.18, 220, 32]} />
        <meshStandardMaterial
          color="#6ee7ff"
          metalness={0.35}
          roughness={0.2}
          emissive="#1f6feb"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh rotation={[-0.3, -0.6, 0.1]}>
        <ringGeometry args={[1.4, 1.45, 80]} />
        <meshBasicMaterial color="#a855f7" opacity={0.45} transparent />
      </mesh>
    </group>
  );
}

function FlowParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 280; i += 1) {
      const radius = THREE.MathUtils.randFloat(0.6, 1.6);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      arr.push(x, y, z);
    }
    return new Float32Array(arr);
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.08;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60a5fa"
        opacity={0.55}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DataRails() {
  const mesh = useRef<THREE.Mesh>(null);
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-1.6, 0.6, -0.6),
          new THREE.Vector3(-0.4, 0.1, 0.2),
          new THREE.Vector3(0.4, -0.1, -0.1),
          new THREE.Vector3(1.4, 0.3, 0.6),
        ],
        false,
        "centripetal",
      ),
    [],
  );

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = Math.sin(clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group rotation={[0.2, 0.6, -0.2]}>
      <mesh ref={mesh}>
        <tubeGeometry args={[curve, 80, 0.014, 12, false]} />
        <meshStandardMaterial
          color="#7cf4ff"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.4}
        />
      </mesh>
      <mesh position={[0.2, -0.25, 0]}>
        <torusGeometry args={[0.2, 0.008, 16, 80]} />
        <meshBasicMaterial color="#a855f7" opacity={0.55} transparent />
      </mesh>
    </group>
  );
}

export function ArchitectureCanvas() {
  return (
    <div className="glass-panel relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#05070e]">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }}>
        <color attach="background" args={["#05070e"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={6} color="#7cf4ff" />
        <pointLight position={[-3, -2, -3]} intensity={4} color="#a855f7" />
        <OrbitalNodes />
        <FlowParticles />
        <DataRails />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#05070e] to-transparent" />
    </div>
  );
}

