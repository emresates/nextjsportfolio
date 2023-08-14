"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

function Cards() {
  return (
    <div className="h-full sm:h-[85vh] md:h-[75vh]">
      <section className="flex items-center justify-center pb-12 text-4xl font-medium uppercase leading-tight tracking-widest md:justify-start md:pl-28">
        what drives me
      </section>
      <section className="relative w-full flex-row items-center justify-center gap-x-8 md:flex xl:gap-x-28">
        <Tilt
          scale={1.05}
          transitionSpeed={1000}
          tiltReverse
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="left-[18%] top-0 xl:absolute"
        >
          <div className="relative m-auto h-96 w-72 rounded-xl bg-gray-700">
            <div className="absolute -left-8 top-8 flex flex-col uppercase">
              <div className="text-stroke-sm text-xl font-bold tracking-widest">
                desire to
              </div>
              <div className="text-4xl font-bold tracking-wider">Innovate</div>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHk3aHYybnR2cW41YTU2dmlpZWk1anRmaXo5bnh2c2VsczBnbXZweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xFRjbfNzmTOdXy/giphy.gif"
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
          className="top-4 xl:absolute"
        >
          <div className="relative m-auto h-96 w-72 rounded-xl bg-gray-700">
            <div className="absolute -left-8 top-8 flex flex-col uppercase">
              <div className="text-stroke-sm text-xl font-bold tracking-widest">
                desire to
              </div>
              <div className="text-4xl font-bold tracking-wider">learn</div>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3FvMDhzNHFkdG80eWhxZHV1NnB0amFlcXMydGo1dDVuNm15cWQ1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7SKOwf1nD6j6XhfLMG/giphy.gif"
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
          className="right-[18%] top-8 xl:absolute"
        >
          <div className="relative m-auto h-96 w-72 rounded-xl bg-gray-700">
            <div className="absolute -left-8 top-8 flex flex-col uppercase">
              <div className="text-stroke-sm text-xl font-bold tracking-widest">
                desire to
              </div>
              <div className="text-4xl font-bold tracking-wider">support</div>
            </div>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHNoanhwbG1oeG1vY2VzNzBhYXI5Mng3NjVyZG9xdzZodDNiYXkwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YRzQnWzbn4WIxd3ZYx/giphy.gif"
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
