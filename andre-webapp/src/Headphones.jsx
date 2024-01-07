// Headphones.jsx

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Headphones = (props) => {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf'); 

  return <primitive object={scene} {...props} />;
};

export default Headphones;