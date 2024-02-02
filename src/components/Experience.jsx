import { Float, Line, OrbitControls } from "@react-three/drei";
import Background from "./Background";
import * as THREE from 'three';

import Airplane from "./Airplane";
import Cloud from "./Cloud";
import { useMemo } from "react";

export const Experience = () => {

  const curve = useMemo(()=>{
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(0,0,-10),
      new THREE.Vector3(-2,0,-20),
      new THREE.Vector3(-3,0,-30),
      new THREE.Vector3(0,0,-40),
      new THREE.Vector3(5,0,-50),
      new THREE.Vector3(7,0,-60),
      new THREE.Vector3(5,0,-70),
      new THREE.Vector3(0,0,-80),
      new THREE.Vector3(0,0,-90),
      new THREE.Vector3(0,0,-100),
    ],
    false,
    "catmullrom",
    0.5)
  });

  const linePoints = useMemo(()=>{
    return curve.getPoints(2000)
  },[curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  return (
    <>
      <OrbitControls />
      <Background/>

      <Float speed={2} floatIntensity={2}>
        <Airplane    
          rotation-y={Math.PI / 2}
          scale={[0.2, 0.2, 0.2]}
          position-y={0.1}
        />
      </Float>

      <group position-y={-2}>
      
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps:2000,
                extrudePath:curve,
                bevelEnabled:false
              }
            ]}
          />
          <meshStandardMaterial color={'white'} lineWidth={16} transparent opacity={0.7}/>
        </mesh>
      </group>

      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        rotation-y={Math.PI / 9}
        position={[2, -0.2, -2]}
      />
      <Cloud
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[1, -0.2, -12]}
      />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
      <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} />
    </>
  );
};