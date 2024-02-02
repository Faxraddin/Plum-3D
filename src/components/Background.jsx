import React from "react";
import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import * as THREE from 'three';

const Background = () => {
  return (
    <>
        <Environment preset="sunset"/>
        <Sphere scale={[100,100,100]} rotateY={Math.PI / 2}>
            <LayerMaterial lighting="physical" transmission={1} side={THREE.BackSide}>
                <Gradient colorA={'#357ca1'} colorB={'white'} axes="y" end={0.5} start={0}/>
            </LayerMaterial>
        </Sphere>
    </>
  )
}
export default Background