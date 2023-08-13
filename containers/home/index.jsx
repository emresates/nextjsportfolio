"use client";
import React from "react";
import HeroText from "../../components/heroText";
import Lottie from "lottie-react";
import animationData from "../../public/hero-anim.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// motion.h2
// variants={fadeIn("up", 0.2)}
// initial="hidden"
// animate="show"
// exit="hidden"

function HomeContainer() {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden pl-28">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-screen w-1/2 items-center justify-center"
        >
          <HeroText text="Hi,&nbsp;I'm&nbsp;Emre, Frontend&nbsp;Developer" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-screen w-2/5 justify-center"
        >
          <Lottie animationData={animationData} />
        </motion.div>
      </div>
    </>
  );
}

export default HomeContainer;
