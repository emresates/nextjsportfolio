import React from "react";
import HeroText from "../../components/heroText";

function HomeContainer() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-screen w-3/5 items-center justify-center">
        <HeroText text="Hi,&nbsp;I'm&nbsp;Emre, Frontend&nbsp;Developer" />
      </div>
      <div className="h-screen w-2/5"></div>
    </div>
  );
}

export default HomeContainer;
