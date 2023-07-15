"use client";

import { useState } from "react";
import experience from "../../data/Experince";

interface Props {}

const Experience: React.FC<Props> = () => {
  const [activeExp, setActiveExp] = useState<number>(0);
  return (
    <div id="experience" className="px-4 md:px-8 py-14 mx-auto lg:max-w-7xl ">
      <h2 className="mb-16 text-center font-semibold text-4xl">Experience</h2>
      <div className="grid grid-cols-2">
        <div className="">
          {experience.map((exp, key) => (
            <div
              key={key}
              className={`cursor-pointer border-2 border-secondary rounded-[33px] w-10/12 h-24 py-3 px-7  flex flex-col justify-between mb-5 hover:bg-secondary hover:text-primary1 transition ease-in-out delay-100 ${
                activeExp === exp.id
                  ? "bg-secondary text-primary1"
                  : " text-secondary"
              }`}
              onClick={() => setActiveExp(exp.id)}
            >
              <h3 className="font-semibold text-xl">{exp.title}</h3>
              <div className="flex justify-between">
                <p className="text-sm">{exp.organisation}</p>
                <p className="text-sm">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
        {experience
          .filter((exp) => exp.id === activeExp)
          .map((exp, key) => (
            <div key={key} className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h4 className="text-secondary font-bold text-2xl">
                    {exp.title}
                  </h4>
                  <h5 className="text-secondary text-l">{exp.organisation}</h5>
                </div>
                <div className="border-2 border-secondary rounded-[24px] h-10 px-5 flex items-center justify-center text-secondary">
                  <p>{exp.date}</p>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: exp.description }}
                className="my-10"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
