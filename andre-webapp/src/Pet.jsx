// Pet.jsx

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Pet = (props) => {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf'); 

  return <primitive object={scene} {...props} />;
};

export default Pet;