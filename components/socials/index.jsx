import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//* Icons
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Socials() {
  return (
    <motion.div
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      animate="show"
      // exit="hidden"
      className="flex items-center gap-x-5 text-3xl"
    >
      <Link
        href="https://www.instagram.com/secenory/"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-pink-700"
        id="social account instagram secenory"
        aria-label="social account instagram"
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        href="https://www.linkedin.com/in/emresates/"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-blue-500"
        id="social account linkedin secenory"
        aria-label="social account linkedin"
      >
        <AiOutlineLinkedin />
      </Link>
      <Link
        href="https://github.com/emresates"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1"
        id="social account github secenory"
        aria-label="social account github"
      >
        <AiOutlineGithub />
      </Link>
      <Link
        href="https://tr.pinterest.com/Secenory2/"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-red-600"
        id="social account pinterest secenory"
        aria-label="social account pinterest"
      >
        <BiLogoPinterestAlt />
      </Link>
    </motion.div>
  );
}

export default Socials;
