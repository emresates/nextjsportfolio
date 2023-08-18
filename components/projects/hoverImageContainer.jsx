"use client";
import Image from "next/image";
import React, { useState } from "react";

const HoverImageContainer = ({
  imgLeft,
  imgCenter,
  imgRight,
  imgLeft2,
  imgCenter2,
  imgRight2,
  imgThumb,
  html,
}) => {
  const [hoverState, setHoverState] = useState(true);
  return (
    <div
      onMouseEnter={() => setHoverState(false)}
      onMouseLeave={() => setHoverState(true)}
      className="relative flex h-full w-full select-none justify-between rounded-sm shadow-md shadow-black"
    >
      {hoverState && (
        <Image
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill transition-opacity group-hover/3:opacity-100"
          src={imgThumb}
          alt="Main Image"
          fill
          unoptimized
        />
      )}
      <div className="group/1 flex-1 overflow-hidden">
        <img
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill opacity-0 transition-opacity group-hover/1:opacity-100"
          src={imgLeft}
          alt="Left Image"
        />
      </div>
      <div className="group/2 flex-1 overflow-hidden">
        <img
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill opacity-0 transition-opacity group-hover/2:opacity-100"
          src={imgCenter}
          alt="Center Image"
        />
      </div>
      <div className="group/3 h-full w-full flex-1 overflow-hidden">
        <img
          className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill opacity-0 transition-opacity group-hover/3:opacity-100"
          src={imgRight}
          alt="Right Image"
        />
      </div>
      {html && (
        <>
          <div className="group/4 flex-1 overflow-hidden">
            <img
              className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill opacity-0 transition-opacity group-hover/4:opacity-100"
              src={imgLeft2}
              alt="Left Image"
            />
          </div>
          <div className="group/5 flex-1 overflow-hidden">
            <img
              className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill opacity-0 transition-opacity group-hover/5:opacity-100"
              src={imgCenter2}
              alt="Center Image"
            />
          </div>
          <div className="group/6 h-full w-full flex-1 overflow-hidden">
            <img
              className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-sm object-fill opacity-0 transition-opacity group-hover/6:opacity-100"
              src={imgRight2}
              alt="Right Image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HoverImageContainer;
