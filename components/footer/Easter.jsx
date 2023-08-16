import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Socials from "../socials";

const Easter = ({ setEasterEgg, setOnce, Once }) => {
  const [breakHeart, setBreakHeart] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => setBreakHeart(true), 1000);
  }, []);
  return (
    <motion.div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black py-4 md:pt-0">
      <div
        onClick={() => setEasterEgg(false)}
        className="fixed left-4 top-8 rotate-90 transform"
      >
        <span className="goback">Go Back</span>
      </div>
      <motion.div className="pb-8 pt-2 text-center text-2xl font-bold uppercase tracking-widest md:text-4xl">
        {!clicked && (
          <Typewriter
            options={{
              cursor: "",
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString(
                  '<span class="text-stroke-sm">Oh no :( </span>You <span class="text-stroke-sm">broke </span> my heart',
                )
                .start();
            }}
          />
        )}

        {clicked && (
          <Typewriter
            options={{
              cursor: "",
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString('<span class="text-stroke-sm">Thank</span> You :))')
                .start();
            }}
          />
        )}
      </motion.div>
      <motion.div className="flex w-full flex-col items-center justify-center pt-32">
        <motion.div
          style={{
            opacity: breakHeart ? "1" : "0",
            transition: "1s ease-in-out",
          }}
          className={
            breakHeart
              ? "breakHeart absolute flex w-full items-center justify-center"
              : "absolute flex w-full items-center justify-center"
          }
          onClick={() => {
            setOnce(true);
            setClicked(true);
          }}
        >
          <svg
            className="leftHeart"
            style={{
              marginRight: "-136px",
              transform: !Once ? "rotateZ(-5deg)" : "rotateZ(0deg)",
            }}
            height="300"
            viewBox="0 0 316 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dii_1269:82)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M224.996 299.654L232 272.492L217 255.992L240.209 227.492L209.783 192.992L240.209 148.992L202.5 116.954L224.996 76.3382L209.783 61.1251C178.95 30.2916 128.959 30.2916 98.1251 61.1251C67.2916 91.9586 67.2916 141.95 98.1251 172.783L113.338 187.996L224.996 299.654Z"
                fill="url(#paint0_linear_1269:82)"
              />
            </g>
            <defs>
              <filter
                id="filter0_dii_1269:82"
                x="0.111763"
                y="0.555882"
                width="314.986"
                height="411.431"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="37.4441" />
                <feGaussianBlur stdDeviation="37.4441" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.178039 0 0 0 0 0.0227451 0 0 0 0 0.0227451 0 0 0 0.8 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1269:82"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1269:82"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="24.9627" />
                <feGaussianBlur stdDeviation="12.4814" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.168314 0 0 0 0 0.168314 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_1269:82"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-24.9627" />
                <feGaussianBlur stdDeviation="12.4814" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.356078 0 0 0 0 0.0454902 0 0 0 0 0.0454902 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_1269:82"
                  result="effect3_innerShadow_1269:82"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1269:82"
                x1="225"
                y1="37.9924"
                x2="225"
                y2="299.654"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#760F0F" />
                <stop offset="1" stop-color="#FF2727" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="rightHeart"
            height="300"
            style={{ transform: !Once ? "rotateZ(5deg)" : "rotateZ(0deg)" }}
            viewBox="0 0 323 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dii_1269:81)">
              <path
                d="M224.867 61.1328C210.063 46.3215 189.98 38 169.038 38C148.097 38 128.014 46.3215 113.209 61.1328L97.9962 76.3458L75.5 116.962L113.209 149L82.7831 193L113.209 227.5L90 256L105 272.5L97.9962 299.662L209.654 188.004L224.867 172.791C239.678 157.986 248 137.903 248 116.962C248 96.0204 239.678 75.9372 224.867 61.1328Z"
                fill="url(#paint0_linear_1269:81)"
              />
            </g>
            <defs>
              <filter
                id="filter0_dii_1269:81"
                x="0.611763"
                y="0.555882"
                width="322.276"
                height="411.438"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="37.4441" />
                <feGaussianBlur stdDeviation="37.4441" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.178039 0 0 0 0 0.0227451 0 0 0 0 0.0227451 0 0 0 0.8 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1269:81"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1269:81"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="24.9627" />
                <feGaussianBlur stdDeviation="12.4814" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.168314 0 0 0 0 0.168314 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_1269:81"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-24.9627" />
                <feGaussianBlur stdDeviation="12.4814" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.356078 0 0 0 0 0.0454902 0 0 0 0 0.0454902 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_1269:81"
                  result="effect3_innerShadow_1269:81"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1269:81"
                x1="98"
                y1="38"
                x2="98"
                y2="299.662"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#760F0F" />
                <stop offset="1" stop-color="#FF2727" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
      <div className="-mt-12 pt-36 text-center text-2xl font-bold uppercase tracking-widest md:text-4xl">
        {!clicked && (
          <Typewriter
            options={{
              cursor: "",
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(5000)
                .typeString(
                  '<span class="text-stroke-sm">Click again</span> to <span class="text-stroke-sm">heal</span> my broken heart',
                )
                .start();
            }}
          />
        )}

        {clicked && (
          <Typewriter
            options={{
              cursor: "",
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString(
                  '<span class="text-stroke-sm">You</span> can <span class="text-stroke-sm">follow</span> my social accounts :)',
                )
                .callFunction(() => {
                  setShowSocial(true);
                })
                .start();
            }}
          />
        )}
      </div>
      <div
        className={
          showSocial
            ? "opacity-1 transform transition duration-1000 md:scale-150 md:p-6"
            : "transform opacity-0 transition duration-1000 md:scale-150 md:p-6"
        }
      >
        <Socials />
      </div>
    </motion.div>
  );
};

export default Easter;
