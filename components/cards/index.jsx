"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

function Cards() {
  return (
    <div className="h-full xl:h-[75vh]">
      <section className="flex items-center justify-center px-6 pb-12 text-4xl font-medium uppercase leading-tight tracking-widest md:justify-end md:pl-28 xl:px-28">
        what drives me
      </section>
      <section className="relative w-full flex-row flex-wrap items-center justify-center gap-x-12 md:flex xl:gap-x-28">
        <Tilt
          scale={1.05}
          transitionSpeed={1000}
          tiltReverse
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="left-[18%] top-0 mb-10 xl:absolute"
        >
          <div className="relative m-auto h-[22rem] w-[17rem] rounded-xl bg-gray-700 md:h-96 md:w-72">
            <div className="absolute -top-4 left-2/4 flex -translate-x-1/2 flex-col text-center uppercase md:-left-8 md:top-8 md:translate-x-0 md:text-left">
              <div className="text-stroke-sm text-xl font-bold tracking-widest">
                desire to
              </div>
              <div className="text-4xl font-bold tracking-wider">Innovate</div>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="./gifs/gif1.webp"
              alt="innovation"
            />
          </div>
          <div className="mx-auto my-4 w-64 text-center text-xl">
            I always try my hardest to stand out from the crowd and spend a lot
            of time coming up with satisfying and unique designs and solutions.
          </div>
        </Tilt>

        <Tilt
          scale={1.05}
          transitionSpeed={1000}
          tiltReverse
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="top-4 mb-10 xl:absolute"
        >
          <div className="relative m-auto h-[22rem] w-[17rem] rounded-xl bg-gray-700 md:h-96 md:w-72">
            <div className="absolute -top-4 left-2/4 flex -translate-x-1/2 flex-col text-center uppercase md:-left-8 md:top-8 md:translate-x-0 md:text-left">
              <div className="text-stroke-sm text-xl font-bold tracking-widest">
                desire to
              </div>
              <div className="text-4xl font-bold tracking-wider">learn</div>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="./gifs/gif2.webp"
              alt="learn"
            />
          </div>
          <div className="mx-auto my-4 w-64 text-center text-xl">
            It feels euphoric when you step into the unknown and discover
            something new and valuable. I try to learn something from everything
            I do.
          </div>
        </Tilt>

        <Tilt
          scale={1.05}
          transitionSpeed={1000}
          tiltReverse
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="right-[18%] top-8 mb-10 xl:absolute"
        >
          <div className="relative m-auto h-[22rem] w-[17rem] rounded-xl bg-gray-700 md:h-96 md:w-72">
            <div className="absolute -top-4 left-2/4 flex -translate-x-1/2 flex-col text-center uppercase md:-left-8 md:top-8 md:translate-x-0 md:text-left">
              <div className="text-stroke-sm text-xl font-bold tracking-widest">
                desire to
              </div>
              <div className="text-4xl font-bold tracking-wider">support</div>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="./gifs/gif3.webp"
              alt="support"
            />
          </div>
          <div className="mx-auto my-4 w-64 text-center text-xl">
            Its the support that kept me going on the journey I've begun. It is
            always a joy to give back to the community that shaped me to who I
            am today.
          </div>
        </Tilt>
      </section>
      <section />
    </div>
  );
}

export default Cards;
