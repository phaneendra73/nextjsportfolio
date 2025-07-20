import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    scifi_computer_screen_0: THREE.Mesh;
    scifi_computer_computer_0: THREE.Mesh;
    scifi_computer_keyboard_0: THREE.Mesh;
    scifi_computer_keys_0: THREE.Mesh;
  };
  materials: {
    screen: THREE.MeshStandardMaterial;
    computer: THREE.MeshStandardMaterial;
    keyboard: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
  };
};

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/sci-fi_computer.glb') as unknown as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  // Add slow Y-axis rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Adjust speed here
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null} scale={5}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scifi_computer_screen_0.geometry}
          material={materials.screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scifi_computer_computer_0.geometry}
          material={materials.computer}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scifi_computer_keyboard_0.geometry}
          material={materials.keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scifi_computer_keys_0.geometry}
          material={materials.keys}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/sci-fi_computer.glb');
