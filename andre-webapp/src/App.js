import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import Cromlech from './Cromlech';
import { PerspectiveCamera, Environment, CameraControls } from '@react-three/drei';
import Desk from './Desk.jsx';
import Computer from './Computer.jsx';
import Headphones from './Headphones.jsx';
import Pet from './Pet.jsx';

const App = () => {
  const deskPosition = [-10, -31, 2];
  const [textSide, setTextSide] = useState("hi, welcome to my website my name is eberto andre ruiz");

  const changeText = (text) => {
    setTextSide(text)
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Canvas flat style={{ flex: 1 }}>
       <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        <group scale={20} position={[0, -200, -500]}>
          {/* <Desk position={deskPosition} /> */}
          <Computer onClick={() => changeText("hello from computer")} position={[-13, 0, 4]} />
          <Headphones onClick={() => changeText("hello from headphones")} position={[-3, 0, -13]} scale={2} />
          <Pet onClick={() => changeText("hello from pet")}  position={[8, 0, 8]} scale={2} />
          <Text
            color="black"
            fontSize={2}
            maxWidth={300}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            position={[0, 0, 0]}
          >
            Andre Ruiz
          </Text>
          <Cromlech position={[0, 0, 0]} />


        </group>
        <Environment preset="city" background blur={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
      </Canvas>
      <div style={{ flex: 1 }}>
        <p>{textSide}</p>
      </div>
    </div>
  );
};


export default App;
