"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import Logo4 from "../../public/eablack.png";
import Logo5 from "../../public/eawhite.png";
import Socials from "../socials";
import { fadeIn } from "../../variants";

export default function Header() {
  return (
    <header className="xl:h-90 absolute z-30 flex w-full items-center px-16 xl:h-[110px] xl:px-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row">
        <motion.span
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="inline-block dark:hidden xl:pl-16"
        >
          <Link
            href={"/"}
            aria-label="emre ates logo white"
            id="emre ates logo white"
          >
            <Image width={50} height={48} alt="" priority={true} src={Logo4} />
          </Link>
        </motion.span>
        <motion.span
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden dark:inline-block xl:pl-16"
        >
          <Link
            href={"/"}
            aria-label="emre ates logo dark"
            id="emre ates logo dark"
          >
            <Image width={50} height={48} alt="" priority={true} src={Logo5} />
          </Link>
        </motion.span>
        <Socials />
      </div>
    </header>
  );
}
