"use client";
import React from "react";
import HeroText from "../../components/heroText";
import Lottie from "lottie-react";
import animationData from "../../public/hero-anim.json";

function HomeContainer() {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden pl-28">
        <div className="flex h-screen w-1/2 items-center justify-center">
          <HeroText text="Hi,&nbsp;I'm&nbsp;Emre, Frontend&nbsp;Developer" />
        </div>
        <div className="h-screen w-2/5 flex justify-center">
          <Lottie  animationData={animationData} />
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
