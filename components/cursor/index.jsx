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
        // color="255, 255, 255"
        // innerSize={20}
        // outerSize={22}
        // innerScale={2.4}
        // outerScale={2.6}
        // outerAlpha={1}
        // innerStyle={{
        //   backgroundColor: "white",
        //   mixBlendMode: "difference",
        // }}
        // outerStyle={{
        //   mixBlendMode: "difference",
        // }}

        color="255, 255, 255"
        innerSize={8}
        outerSize={35}
        innerScale={2}
        outerScale={1.8}
        outerAlpha={0}
        innerStyle={{
          mixBlendMode: "difference",
        }}
        outerStyle={{
          mixBlendMode: "difference",
          border:"3px solid white",
          backgroundColor:"transparent"
        }}
        hasBlendMode={true}
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
          ".footer",
          {
            target: ".hero",
          },
        ]}
      />
    </>
  );
}

export default Cursor;
