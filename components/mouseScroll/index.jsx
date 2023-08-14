"use client"
import React, { useEffect, useState } from "react";

function MouseScroll() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (scrollY >= document.body.clientHeight - windowHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-10 right-10 flex flex-col">
          <p>Scroll</p>
          <div className="bottom-10 right-10 flex h-16 w-8 flex-col items-center justify-around rounded-full border-2 border-black">
            <div className="h-6 w-3 animate-bounce rounded-full border-2 border-black bg-gray-500"></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default MouseScroll;
