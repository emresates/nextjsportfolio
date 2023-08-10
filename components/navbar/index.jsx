"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export const navData = [
  {
    name: "home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "about",
    path: "/about",
    icon: <BsFillFilePersonFill />,
  },
  {
    name: "projects",
    path: "/projects",
    icon: <PiProjectorScreenChartBold />,
  },
  {
    name: "skills",
    path: "/skills",
    icon: <MdComputer />,
  },

  {
    name: "contact",
    path: "/contact",
    icon: <MdOutlineContactPhone />,
  },
];

function Navbar() {
  const [mode, setMode] = useThemeSwitcher();

  const pathname = usePathname();
  return (
    <header
      className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full 
      flex-col items-center gap-y-4 
      xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center      "
    >
      <div
        className="flex h-[80px] w-full items-center justify-between gap-y-10  bg-black/20 px-4 py-8 text-3xl
        text-black backdrop-blur-sm dark:bg-white/10 dark:text-white md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full
        xl:px-0 xl:text-xl
        
        "
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-red-500"
              } group relative flex items-center transition-all duration-300 hover:text-red-500`}
              key={index}
              href={link.path}
            >
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-md bg-black p-[6px] text-white dark:bg-white dark:text-red-500">
                  <p className="text-[12px] font-semibold capitalize leading-none">
                    {link.name}
                  </p>
                  <span className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-black dark:border-l-white"></span>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? <BsLightbulbOff /> : <BsLightbulb />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
