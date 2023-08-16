"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import Logo4 from "../../public/eablack.png";
import Logo5 from "../../public/eawhite.png";
import Socials from "../socials";
import { fadeIn } from "../../variants";
import Head from "next/head";

export default function Header() {
  return (
    <header className="xl:h-90 absolute z-30 flex w-full items-center px-16 xl:h-[110px] xl:px-0">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="Emre Ates" />
        <meta
          name="description"
          content="Emre Ates, Frontend Dev based in Turkey. Explore more about me and my works here !"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emreates.vercel.app/" />
        <meta property="og:title" content="Emre Ates - Portfolio" />
        <meta property="og:site_name" content="emreates" />
        <meta
          property="og:description"
          content="Emre Ates, Frontend Dev based in Turkey. Explore more about me and my works here !"
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          name="keywords"
          content="PortFolio, about me, about emreates,emreates, emre ates"
        />
      </Head>

      <motion.div
        variants={fadeIn("top", 3.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="container mx-auto flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row"
      >
        <motion.span
          variants={fadeIn("right", 3.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="inline-block dark:hidden xl:pl-16"
        >
          <Link href={"/"}>
            <Image width={50} height={48} alt="" priority={true} src={Logo4} />
          </Link>
        </motion.span>
        <motion.span
          variants={fadeIn("right", 3.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden dark:inline-block xl:pl-16"
        >
          <Link href={"/"}>
            <Image width={50} height={48} alt="" priority={true} src={Logo5} />
          </Link>
        </motion.span>
        <Socials />
      </motion.div>
    </header>
  );
}
