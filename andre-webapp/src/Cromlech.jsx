// Cromlech.js

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Cromlech = (props) => {
  const group = useRef();
  const { scene } = useGLTF('/models/env.gltf'); // Use the correct relative path

  return <primitive object={scene} {...props} />;
};

export default Cromlech;
