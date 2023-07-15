"use client";

import { useState } from "react";
import experience from "../../data/Experince";

interface Props {}

const Experience: React.FC<Props> = () => {
  const [activeExp, setActiveExp] = useState<number>(0);
  return (
    <div id="experience" className="px-4 md:px-8 py-14 mx-auto lg:max-w-7xl ">
      <h2 className="mb-8 md:mb-16 text-center font-semibold text-2xl md:text-4xl">
        Experience
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="flex overflow-x-scroll scrollbar-hide md:overflow-visible md:block">
          {experience.map((exp, key) => (
            <div
              key={key}
              className={`cursor-pointer border-2 border-secondary rounded-[25px] md:rounded-[33px] min-w-[15rem] md:w-10/12 h-20 md:h-24 py-3 px-7  flex flex-col justify-between mr-5 md:mb-5 hover:bg-secondary hover:text-primary1 transition ease-in-out delay-100 ${
                activeExp === exp.id
                  ? "bg-secondary text-primary1"
                  : " text-secondary"
              }`}
              onClick={() => setActiveExp(exp.id)}
            >
              <h3 className="font-semibold text-sm md:text-xl">{exp.title}</h3>
              <div className="flex justify-between">
                <p className="text-xs md:text-sm">{exp.organisation}</p>
                <p className="text-xs md:text-sm">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
        {experience
          .filter((exp) => exp.id === activeExp)
          .map((exp, key) => (
            <div
              key={key}
              className="flex flex-col justify-center md:my-0 my-5"
            >
              <div className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-col">
                  <h4 className="text-secondary font-bold text-xl md:text-2xl">
                    {exp.title}
                  </h4>
                  <h5 className="text-secondary text-base md:text-xl md:flex hidden">
                    {exp.organisation}
                  </h5>
                  <div className="flex md:hidden justify-between mt-5">
                    <h5 className="text-secondary text-base md:text-xl">
                      {exp.organisation}
                    </h5>
                    <h5 className="text-secondary text-base md:text-xl">
                      {exp.date}
                    </h5>
                  </div>
                </div>
                <div className="border-2 border-secondary rounded-[24px] h-10 px-5 md:flex items-center justify-center text-secondary text-base md:text-xl hidden">
                  <p>{exp.date}</p>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: exp.description }}
                className="my-10 text-justify md:text-base text-sm"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
