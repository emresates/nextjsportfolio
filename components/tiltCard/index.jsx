"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function TiltCard({ title, icon, duration }) {
  return (
    <>
      <Tilt scale={1.1} transitionSpeed={1000} tiltReverse>
        <motion.div
          variants={fadeIn("left", 0.2 + duration)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-40 w-40 flex-col items-center justify-center gap-5 rounded-lg bg-gray-800 p-4 text-center shadow-md shadow-gray-950 xl:h-56 xl:w-56"
        >
          <img className="h-12 w-12 xl:h-20 xl:w-20" src={icon} alt="" />
          <h1 className="text-xl text-white xl:text-3xl">{title}</h1>
        </motion.div>
      </Tilt>
    </>
  );
}

export default TiltCard;
