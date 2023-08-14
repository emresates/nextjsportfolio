"use client";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

function ComputerObject() {
  return (
    <Canvas className="w-full h-full">
      <Stage environment="city" intensity={0.6}>
        <Computer />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default ComputerObject;
