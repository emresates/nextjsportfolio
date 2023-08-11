"use client";
import React from "react";

import Tilt from "react-parallax-tilt";
function TiltCard({ title, icon }) {
  return (
    <>
      <Tilt scale={1.1} transitionSpeed={1000} tiltReverse>
        <div className="flex xl:h-56 xl:w-56 h-40 w-40 flex-col items-center justify-center gap-5 rounded-lg bg-gray-800 p-4 text-center shadow-md shadow-gray-950">
          <img className="xl:h-20 xl:w-20 w-12 h-12" src={icon} alt="" />
          <h1 className="xl:text-3xl text-xl text-white">{title}</h1>
        </div>
      </Tilt>
    </>
  );
}

export default TiltCard;
