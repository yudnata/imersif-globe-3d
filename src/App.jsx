import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Earth } from './Earth.jsx';
import TextOverlay from './TextOverlay.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <main className="w-screen h-screen bg-black text-white font-urbanist relative">
      <Header />
      <TextOverlay />
      <Canvas
        className="absolute top-0 left-0 z-0"
        camera={{
          position: [0, 0, 25],
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />

          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
          />

          <Earth
            scale={3.0}
            position={[0, 1.5, 0]}
          />

          <Stars
            radius={100}
            count={5000}
            factor={4}
            fade
            speed={1}
          />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </main>
  );
}

export default App;
