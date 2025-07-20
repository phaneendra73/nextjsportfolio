'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds, useBounds } from '@react-three/drei';
import { Model } from './Model';
import { useLayoutEffect } from 'react';

function FitCameraToModel() {
  const bounds = useBounds();

  useLayoutEffect(() => {
    bounds.refresh().fit(); // Only runs once
  }, [bounds]);

  return null;
}

export default function Scene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      className="w-full h-full"
      onCreated={({ gl }) => {
        gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
          console.warn('WebGL context lost');
        });
      }}
    >
      <ambientLight />
      <directionalLight position={[1, 9, 1]} castShadow />

      <Bounds fit clip margin={1.2}>
        <Model />
        <FitCameraToModel />
      </Bounds>

      <OrbitControls enableZoom={false} enablePan={false} enableRotate />
    </Canvas>
  );
}
