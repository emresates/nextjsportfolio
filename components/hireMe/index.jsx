import React from "react";
import DigitalCard from "./DigitalCard";
import Image from "next/image";
import Link from "next/link";
import Socials from "../socials";

function HireMe() {
  return (
    <div className="relative flex flex-col items-center justify-between px-10 py-20 antialiased lg:flex-row">
      <div className="relative w-full md:w-2/5">
        <div>
          <div className="CardHolder flex items-center justify-center">
            <DigitalCard />
            <div className="relative hidden h-44 w-44 overflow-hidden rounded-2xl dark:block sm:h-96 sm:w-96">
              <Image
                className="rounded-2xl"
                src="./qrcard.png"
                alt="Qr Code"
                unoptimized
                fill
                quality={90}
                loading="lazy"
              />
            </div>
            <div className="relative block h-96 w-96 overflow-hidden rounded-2xl dark:hidden">
              <Image
                className="rounded-2xl"
                src="./qrcarddark.png"
                alt="Qr Code"
                unoptimized
                fill
                quality={90}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full p-2 text-center md:mt-2 lg:w-3/5 lg:pr-10 lg:text-left xl:pr-20">
        <div className="text-xl uppercase md:text-3xl">
          Looking for someone who could help you?{" "}
          <span className="px-2 underline">Hire me!</span> <br />
          Need some suggestions?
          <br />
          Feel free to send a message from the
          <Link href="/contact" id="contact-route" className="text-stroke">
            {""} contact page {""}
          </Link>
          or reach out to me through my social media accounts ; )
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default HireMe;
