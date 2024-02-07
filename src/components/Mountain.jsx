import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { fadeOnBeforeCompile } from '../utils/fadeMaterial';
import { useFrame } from '@react-three/fiber';

export default function Mountain({ sceneOpacity, ...props }) {
  const { nodes, materials } = useGLTF('/models/mountain/Mountain.glb')

  const materialRef = useRef();

  useFrame(() => {
    materialRef.current.opacity = sceneOpacity.current;
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Mountain_Cube-Mesh'].geometry}  >
        <meshStandardMaterial
            ref={materialRef}
            onBeforeCompile={fadeOnBeforeCompile}
            color={'#455A64'}
            transparent
        />
      </mesh>
      <mesh geometry={nodes['Mountain_Cube-Mesh_1'].geometry} material={materials.FFFFFF} >
        <meshStandardMaterial
            ref={materialRef}
            onBeforeCompile={fadeOnBeforeCompile}
            envMapIntensity={2}
            transparent
        />
      </mesh>
      <mesh geometry={nodes['Mountain_Cube-Mesh_2'].geometry} >
        <meshStandardMaterial
            ref={materialRef}
            onBeforeCompile={fadeOnBeforeCompile}
            envMapIntensity={1}
            color={'#8BC34A'}
            transparent
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/mountain/Mountain.glb') 