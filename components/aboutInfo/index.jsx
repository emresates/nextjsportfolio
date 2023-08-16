"use client";

import React from "react";
import AtomObject from "../../objects/AtomObject";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function AboutInfo() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-around xl:flex-row">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt:32 w-full px-4 py-40 sm:px-20 xl:mt-0 xl:w-2/5 xl:pl-32"
        >
          <div className="mt-20 xl:mt-0">
            <p className="text-2xl">Introduction</p>
            <h2 className="text-stroke text-5xl  text-red-500 xl:text-9xl">
              About Me
            </h2>
          </div>
          <p className="text-xl tracking-wider">
            I’m Emre aka “Secenory”, a frontend developer, proficient in both
            English and Turkish, experienced in writing efficient React apps on
            all browsers. I deeply care about building interfaces that are
            usable and pleasant for the user.
            <br />
            <br />
            What sets me apart is my unwavering commitment to excellence and the
            desire to expand my skillset beyond frontend development. I am keen
            on exploring new horizons in the realm of full-stack development,
            empowering me to tackle diverse projects with technical prowess.
            <br />
          </p>
        </motion.div>
        <div className="hidden h-full items-center justify-center xl:flex xl:w-2/5">
          <AtomObject />
        </div>
      </div>
    </>
  );
}

export default AboutInfo;