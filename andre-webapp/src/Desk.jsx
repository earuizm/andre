// Desk.jsx

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Desk = (props) => {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/desk/model.gltf'); 

  return <primitive object={scene} {...props} />;
};

export default Desk;