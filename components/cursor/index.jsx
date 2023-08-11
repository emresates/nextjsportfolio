"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className="fixed left-0 top-0 h-8 w-8 rounded-full bg-red-200"
    ></motion.div>
  );
}

export default Cursor;
