import React from "react";
import TiltCard from "../../../components/tiltCard";
import { cardData } from "../../../data/cardData";

function AboutPage() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-around xl:flex-row">
        <div className="mt:32 w-full px-20 xl:mt-0 xl:w-2/3 xl:pl-32">
          <div className="mt-20 xl:mt-0">
            <p className="text-2xl">Introduction</p>
            <h2 className="text-5xl xl:text-9xl">About Me</h2>
          </div>
          <p className="text-xl tracking-wider">
            My proficiency lies in creating interactive and visually appealing
            web applications using cutting-edge technologies such as React,
            Next.js and JavaScript. Throughout my previous projects, I have
            embraced various CSS preprocessors including Sass, Bootstrap,
            Tailwind, Material UI, and Styled Components, which enabled me to
            craft intuitive and user-centric interfaces.
            <br />
            <br />
            What sets me apart is my unwavering commitment to excellence and the
            desire to expand my skillset beyond frontend development. I am keen
            on exploring new horizons in the realm of full-stack development,
            empowering me to tackle diverse projects with technical prowess.
            <br />
            <br />I have effectively communicated with our team to understand
            and address customer needs. Furthermore, through effective time
            management and prioritization skills, I can plan efficiently to
            complete projects within deadlines. I am proficient in both English
            and Turkish languages, allowing me to communicate seamlessly with
            clients, team members, and project stakeholders.
          </p>
        </div>
        <div className="flex w-full items-center justify-center xl:w-1/2">
          <div className="flex w-full flex-wrap items-center justify-center gap-10 xl:w-2/3">
            {cardData.map((card, index) => (
              <TiltCard key={index} title={card.title} icon={card.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
