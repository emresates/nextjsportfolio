"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../../data/experienceData";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#421c1c", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconbg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            className="h-3/5 w-3/5 object-contain"
            src={experience.icon}
            alt=""
          />
        </div>
      }
    >
      <h3 className="text-2xl text-white">{experience.title}</h3>
      <p className="text-2xl font-semibold text-gray-300">
        {experience.company}
      </p>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`key-point-${index}`}
            className="text-white-100 pl-1 text-lg tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function ExperienceLine() {
  return (
    <div className="my-10 px-6 xl:px-28">
      <h1 className="flex items-center justify-center pb-12 text-4xl font-medium uppercase leading-tight tracking-widest md:justify-start">
        Experience
      </h1>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperienceLine;
