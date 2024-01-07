import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import Cromlech from './Cromlech';
import { PerspectiveCamera, Environment, CameraControls } from '@react-three/drei';
import Desk from './Desk.jsx';
import Computer from './Computer.jsx';
import Headphones from './Headphones.jsx';
import Pet from './Pet.jsx';

//main app
const App = () => {
  const deskPosition = [-10, -31, 2];
  const [textSide, setTextSide] = useState("hi, welcome to my website my name is eberto andre ruiz");
  const [selectedImages, setSelectedImages] = useState([]);

  const changeText = (text, images) => {
    setTextSide(text)
    setSelectedImages(images);
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Canvas flat style={{ flex: 1 }}>
       <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        <group scale={20} position={[0, -200, -500]}>
          {/* <Desk position={deskPosition} /> */}
          <Computer onClick={() => changeText(
              <pre>
              {`i graduated from Pomona College with a computer science degree\n\ni interned at Visa in the San Francisco Bay Are in \nmy senior year of college\n\ni then converted to a full time and worked there for 2 years building\nautomation tools for the Test Engineering team, while leading the effort of creating\nVisa's first datalake\n\ni now work at Intuit in the San Francisco Bay Area on the Data team building tools\nthat have revolutionized engineers' day to day\nthough automation and Intuit's own genai\n\ni am proficient in react, java, python, sql\n\ni have extensive experience with databases, rest apis/graphql and full stack applications\nand i am very familiar with cloud platform such as aws and gcp`}
            </pre>
            ,[]
          )} position={[-13, 0, 4]} />
          <Headphones onClick={() => changeText(
              <pre>
              {`i love listening to music\ni listened to 47,105 minutes of music last year on spotify\n\nmy top artists where\nfeid\npinkpantheress\nclairo\nrauw alejandro\nkali uchis\n\ncurrently my favorite song is space cadet by beabadoobee   
              `}
            </pre>
            ,[]
            )} position={[-3, 0, -13]} scale={2} />
          <Pet onClick={() => changeText(
            <pre>
              {`in twenty twenty three i got a cat named ash\n\nshe lived in a farm in florida and was at risk of being killed\n\ni flew to florida and was able to bring her to california\n\nshe is the most loving and silly little girl
              `}
            </pre>,
            ['/images/ash1.jpg','/images/ash2.jpg']
          )} position={[8, 0, 8]} scale={2} />

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
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
  <div style={{ overflowY: 'hidden', marginBottom: '10px' }}>
    <p>{textSide}</p>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {selectedImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Pet ${index + 1}`}
        style={{ width: '300px', height: '350px', marginBottom: '10px' }}
      />
    ))}
  </div>
</div>

    </div>
  );
};


export default App;
