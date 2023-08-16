"use client";
import React, { useState } from "react";
import { motion, transform, useAnimationControls } from "framer-motion";

function TextSpan({ children }) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const animate = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          animate();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="hero inline-block select-none text-5xl md:text-8xl transition-all hover:text-red-500"
    >
      {children}
    </motion.span>
  );
}

export default TextSpan;
