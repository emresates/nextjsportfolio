"use client";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function DigitalCard() {
  const tilt = useRef(null);
  const card = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      reverse: true,
    });
    tilt.current.addEventListener("click", () => {
      card.current.classList.toggle("DigitalCard_flipped");
    });
  }, []);

  return (
    <div className="DigitalCard__holder invisible absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ">
      <div
        ref={tilt}
        className="DigitalCard_parent relative grid place-content-center"
      >
        <div
          ref={card}
          className="DigitalCard  FlipCard relative h-48 w-72 rounded-2xl sm:h-[350px] sm:w-[500px]"
        >
          <div className="DigitalCard_face absolute grid h-full w-full place-content-center rounded-2xl">
            <img
              src="./eawhite.png"
              alt="Brand Logo"
              className="pointer-events-none w-20 md:w-48"
            />
          </div>
          <div
            style={{ color: "#d9d9d9" }}
            className="DigitalCard_face DigitalCard_back grid h-full w-full place-content-center"
          >
            <div className="absolute top-4 w-full">
              <p className="text-center text-2xl font-bold uppercase">
                Emre Ates
              </p>
              <p className="text-center text-sm font-medium uppercase leading-snug tracking-widest">
                Frontend Developer
              </p>
            </div>
            <div className="absolute bottom-4 left-4 flex flex-col space-y-2 md:space-y-4">
              <div className="inline-flex items-center justify-start space-x-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M2.66671 2.66675H13.3334C14.0667 2.66675 14.6667 3.26675 14.6667 4.00008V12.0001C14.6667 12.7334 14.0667 13.3334 13.3334 13.3334H2.66671C1.93337 13.3334 1.33337 12.7334 1.33337 12.0001V4.00008C1.33337 3.26675 1.93337 2.66675 2.66671 2.66675Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 4L8.00004 8.66667L1.33337 4"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <a
                  href="mailto:emresates@outlook.com?subject=Message%20I%20from%20your%20website&body=Got%20something%20?"
                  className="text-#d9d9d9 text-base leading-none"
                  target="_blank"
                >
                  emresates@outlook.com
                </a>
              </div>
              <div className="inline-flex items-center justify-start space-x-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M10.6666 5.33325C11.7275 5.33325 12.7449 5.75468 13.4951 6.50482C14.2452 7.25497 14.6666 8.27239 14.6666 9.33325V13.9999H12V9.33325C12 8.97963 11.8595 8.64049 11.6094 8.39044C11.3594 8.14039 11.0202 7.99992 10.6666 7.99992C10.313 7.99992 9.97387 8.14039 9.72382 8.39044C9.47377 8.64049 9.33329 8.97963 9.33329 9.33325V13.9999H6.66663V9.33325C6.66663 8.27239 7.08805 7.25497 7.8382 6.50482C8.58834 5.75468 9.60576 5.33325 10.6666 5.33325V5.33325Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.00004 6H1.33337V14H4.00004V6Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66671 3.99992C3.40309 3.99992 4.00004 3.40296 4.00004 2.66659C4.00004 1.93021 3.40309 1.33325 2.66671 1.33325C1.93033 1.33325 1.33337 1.93021 1.33337 2.66659C1.33337 3.40296 1.93033 3.99992 2.66671 3.99992Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <a
                  href="https://www.linkedin.com/in/emresates/"
                  className="text-#d9d9d9 text-base leading-none"
                  target="_blank"
                >
                  @emresates
                </a>
              </div>
              <div className="inline-flex items-center justify-start space-x-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M11.3334 1.33325H4.66671C2.82576 1.33325 1.33337 2.82564 1.33337 4.66659V11.3333C1.33337 13.1742 2.82576 14.6666 4.66671 14.6666H11.3334C13.1743 14.6666 14.6667 13.1742 14.6667 11.3333V4.66659C14.6667 2.82564 13.1743 1.33325 11.3334 1.33325Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 7.57996C10.7489 8.13479 10.6542 8.70143 10.3958 9.1993C10.1375 9.69717 9.72877 10.1009 9.22776 10.3531C8.72675 10.6052 8.15897 10.693 7.6052 10.6039C7.05142 10.5148 6.53985 10.2533 6.14323 9.85673C5.74662 9.46012 5.48516 8.94854 5.39605 8.39477C5.30694 7.84099 5.39472 7.27322 5.64689 6.77221C5.89907 6.27119 6.3028 5.86245 6.80066 5.60412C7.29853 5.34578 7.86518 5.25102 8.42001 5.33329C8.98596 5.41721 9.50991 5.68093 9.91447 6.08549C10.319 6.49006 10.5828 7.01401 10.6667 7.57996Z"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6666 4.33325H11.6733"
                      stroke="#d9d9d9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <a
                  href="https://www.instagram.com/secenory/"
                  target="_blank"
                  className="text-#d9d9d9 text-base leading-none"
                >
                  @secenory
                </a>
              </div>
            </div>
            <div className="Card_right absolute bottom-4 right-2 origin-bottom-left translate-x-full -rotate-90 transform ">
              <div className="inline-flex items-center justify-start space-x-2.5">
                <svg
                  className="rotate-90 transform"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.28 1.3333L13.28 1.3333C13.4656 1.33254 13.6494 1.37057 13.8195 1.44496C13.9897 1.51934 14.1424 1.62843 14.2679 1.76524C14.3934 1.90206 14.489 2.06358 14.5485 2.23946C14.6079 2.41535 14.63 2.60171 14.6133 2.78663C14.3904 4.83807 13.6894 6.80863 12.5666 8.53996C11.5431 10.1507 10.1774 11.5164 8.56665 12.54C6.82745 13.6666 4.84731 14.3678 2.78665 14.5866C2.60229 14.6033 2.41649 14.5814 2.24107 14.5223C2.06564 14.4632 1.90444 14.3682 1.76773 14.2435C1.63102 14.1187 1.52179 13.9668 1.447 13.7974C1.37221 13.6281 1.33349 13.4451 1.33332 13.26L1.33332 11.26C1.33013 10.9364 1.4447 10.6228 1.65567 10.3775C1.86664 10.1321 2.15961 9.97191 2.47998 9.92663C3.12003 9.84221 3.74847 9.68566 4.35332 9.45996C4.59193 9.37027 4.85126 9.35085 5.10057 9.40403C5.34988 9.4572 5.57872 9.58072 5.75998 9.75996L6.60665 10.6066C8.27568 9.65759 9.65761 8.27566 10.6066 6.60663L9.75998 5.75996C9.58074 5.5787 9.45722 5.34986 9.40404 5.10055C9.35087 4.85124 9.37029 4.59191 9.45998 4.3533C9.68568 3.74845 9.84223 3.12001 9.92665 2.47996C9.97234 2.15612 10.1355 1.86036 10.385 1.64894C10.6345 1.43752 10.953 1.32518 11.28 1.3333Z"
                    stroke="#d9d9d9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="tel:+905530097545" className="text-base leading-none">
                  +90 5530097545
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalCard;
