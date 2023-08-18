"use client";

import React from "react";
import HeroText from "../../components/heroText";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import animationData from "../../public/hero-anim.json";
import { fadeIn } from "../../variants";
import MarqueeRow from "../../components/marqueeRow";
import Cards from "../../components/cards";
import MouseScroll from "../../components/mouseScroll";
import HireMe from "../../components/hireMe";

function HomeContainer() {
  return (
    <div className="overflow-hidden">
      <div className="mt-28 h-full w-screen overflow-hidden p-10 xl:mt-0 xl:flex xl:pl-28">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-full w-full items-center justify-center xl:h-screen xl:w-1/2"
        >
          <HeroText text="Hi,&nbsp;I'm&nbsp;Emre, Frontend&nbsp;Developer" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-full w-full justify-center xl:h-screen xl:w-2/5"
        >
          <Lottie animationData={animationData} />
        </motion.div>
      </div>
      <MarqueeRow />
      <Cards />
      <HireMe />
      <MouseScroll />
    </div>
  );
}

export default HomeContainer;
