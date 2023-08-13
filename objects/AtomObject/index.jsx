"use client";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";

function AtomObject() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Atom />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default AtomObject;
