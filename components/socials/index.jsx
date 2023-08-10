import Link from "next/link";
import React from "react";

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link
        href="https://www.instagram.com/secenory/"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-pink-700"
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        href="https://www.linkedin.com/in/emresates/"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-blue-500"
      >
        <AiOutlineLinkedin />
      </Link>
      <Link
        href="https://github.com/emresates"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-black"
      >
        <AiOutlineGithub />
      </Link>
      <Link
        href="https://tr.pinterest.com/Secenory2/"
        target="_blank"
        className="transition-all duration-300 hover:-translate-y-1 hover:text-red-600"
      >
        <BiLogoPinterestAlt />
      </Link>
    </div>
  );
}

export default Socials;
