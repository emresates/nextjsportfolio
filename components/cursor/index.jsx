"use client";
import React from "react";
import dynamic from "next/dynamic";

function Cursor() {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <>
      <AnimatedCursor
        color="255, 255, 255"
        innerSize={20}
        outerSize={22}
        innerScale={2.4}
        outerScale={2.6}
        outerAlpha={1}
        innerStyle={{
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
        outerStyle={{
          mixBlendMode: "difference",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "button",
          "textarea",
          ".link",
          ".goback",
          {
            target: ".hero",
          },
        ]}
      />
    </>
  );
}

export default Cursor;
