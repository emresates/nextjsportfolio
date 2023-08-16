import React, { Children } from "react";
import TextSpan from "./textSpan";

function HeroText({ text }) {
  const letterSpans = text
    .split("")
    .map((letter, index) => <TextSpan key={index}>{letter}</TextSpan>);
  return (
    <>
      <div className="hidden break-words xl:block">
        {letterSpans.slice(0, 3)}
        {letterSpans[3]}
        <br />
        {letterSpans.slice(4, 14)}
        <br />
        {letterSpans.slice(14)}
      </div>
      <p className="xl:hidden select-none break-words text-center text-4xl md:text-8xl">
        Hi,&nbsp;I'm&nbsp;Emre, Frontend&nbsp;Developer
      </p>
    </>
  );
}

export default HeroText;
