import React, { Children } from "react";
import TextSpan from "./textSpan";

function HeroText({ text }) {
  const letterSpans = text
    .split("")
    .map((letter, index) => <TextSpan key={index}>{letter}</TextSpan>);
  return (
    <>
      <div>
        {letterSpans.slice(0, 3)}
        {letterSpans[3]}
        <br />
        {letterSpans.slice(4, 14)}
        <br />
        {letterSpans.slice(14)}
      </div>
    </>
  );
}

export default HeroText;
