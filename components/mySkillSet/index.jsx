"use client";

import React from "react";
import Lottie from "lottie-react";
import Image from "next/image";

import aboutanim from "../../public/anim3.json";
import { cardData } from "../../data/cardData";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function MySkillSet() {
  return (
    <div className="py-12 sm:px-16">
      <section className="flex items-center justify-center text-4xl font-medium uppercase leading-tight tracking-widest md:justify-end md:pr-28 ">
        My Skill Set
      </section>
      <div className="flex w-screen items-center justify-center">
        <div className="hidden sm:block sm:w-2/5">
          <Lottie animationData={aboutanim} />
        </div>
        <div className="m-auto flex w-full flex-wrap items-center justify-center gap-5 p-4 sm:w-3/5 sm:p-20 xl:px-60">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative h-12 w-12 sm:h-20 sm:w-20"
            >
              <Image
                unoptimized
                alt={"secenory skill" + card.title}
                aria-label={"secenory skill" + card.title}
                src={card.image}
                fill
                quality={80}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySkillSet;
