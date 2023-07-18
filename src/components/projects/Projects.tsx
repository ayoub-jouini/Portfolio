"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Projects {
  id: number;
  title: string;
  stack: string;
  description: string;
  images: string[];
  organisation: string;
}

interface Props {
  projects: Projects[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  const [nb, setNB] = useState<number>(2);

  const changeNumber = () => (nb === 2 ? setNB(100) : setNB(2));

  const [mode, setMode] = useState<string>("dark");
  const { theme } = useTheme();

  useEffect(() => {
    theme === "light" ? setMode("light") : setMode("dark");
  }, [theme]);

  return (
    <div
      id="projects"
      className="px-4 md:px-8 py-14 mx-auto lg:max-w-7xl flex flex-col items-center"
    >
      <h2 className="mb-8 md:mb-16 text-center font-semibold text-2xl md:text-4xl text-primary1 dark:text-white1">
        Projects
      </h2>
      <div className="">
        {projects
          .filter((projet) => projet.id < nb)
          .map((project, key) =>
            project.id % 2 === 0 ? (
              <div
                key={key}
                className="md:my-16 flex flex-col md:grid md:grid-cols-2 gap-3 mb-16"
              >
                <Link
                  href={`${project.id}`}
                  style={{
                    backgroundImage: `url(/images/${project.images[0]})`,
                  }}
                  className="bg-cover bg-center rounded-[33px] h-96 w-11/12 hidden md:flex"
                />
                <div className="flex flex-col justify-between ">
                  <Link href={`${project.id}`}>
                    <h3 className="cursor-pointer hover:text-primary1 dark:hover:text-white dark:text-secondary text-tertiary font-bold text-lg md:text-2xl md:text-left text-center my-2">
                      {project.title}
                    </h3>
                  </Link>
                  <Link
                    href={`${project.id}`}
                    style={{
                      backgroundImage: `url(/images/${project.images[0]})`,
                    }}
                    className="bg-cover bg-center rounded-[33px] h-72 flex md:hidden my-7"
                  />
                  <p className="text-base md:text-xl text-justify my-2">
                    {project.description}
                  </p>
                  <p className="text-base my-2">Stack: {project.stack}</p>
                  <Link
                    className="self-end flex items-center"
                    href={`${project.id}`}
                  >
                    <p className="cursor-pointer text-l hover:text-primary1 dark:hover:text-white dark:text-secondary text-tertiary  m-2">
                      See more
                    </p>
                    {mode === "light" ? (
                      <img
                        className="cursor-pointer h-5"
                        alt=""
                        src="/icons/arrowlight.svg"
                      />
                    ) : (
                      <img
                        className="cursor-pointer h-5"
                        alt=""
                        src="/icons/arrow.svg"
                      />
                    )}
                  </Link>
                </div>
              </div>
            ) : (
              <div
                key={key}
                className="md:my-16 flex flex-col  md:grid md:grid-cols-2 gap-3 mb-16"
              >
                <div className="flex flex-col justify-between ">
                  <Link href={`${project.id}`}>
                    <h3 className="cursor-pointer hover:text-primary1 dark:hover:text-white dark:text-secondary text-tertiary font-bold text-lg md:text-2xl md:text-left text-center my-2">
                      {project.title}
                    </h3>
                  </Link>
                  <Link
                    href={`${project.id}`}
                    style={{
                      backgroundImage: `url(/images/${project.images[0]})`,
                    }}
                    className="bg-cover bg-center rounded-[33px] h-72 flex md:hidden my-7"
                  />
                  <p className="text-base md:text-xl text-justify my-2">
                    {project.description}
                  </p>
                  <p className="text-base my-2">Stack: {project.stack}</p>
                  <Link
                    className="self-end flex items-center"
                    href={`${project.id}`}
                  >
                    <p className="cursor-pointer text-l hover:text-primary1 dark:hover:text-white dark:text-secondary text-tertiary  m-2">
                      See more
                    </p>

                    {mode === "light" ? (
                      <img
                        className="cursor-pointer h-5"
                        alt=""
                        src="/icons/arrowlight.svg"
                      />
                    ) : (
                      <img
                        className="cursor-pointer h-5"
                        alt=""
                        src="/icons/arrow.svg"
                      />
                    )}
                  </Link>
                </div>

                <Link
                  href={`${project.id}`}
                  style={{
                    backgroundImage: `url(/images/${project.images[0]})`,
                  }}
                  className="bg-cover bg-center rounded-[33px] h-96 w-11/12 hidden md:flex justify-self-end"
                />
              </div>
            )
          )}
      </div>
      <div
        className="flex justify-between w-28 cursor-pointer hover:text-primary1 dark:hover:text-white dark:text-secondary text-tertiary"
        onClick={changeNumber}
      >
        <p className="">{nb === 2 ? "See More" : "See Less"}</p>
        {mode === "light" ? (
          <img
            className={`cursor-pointer h-5 self-end ${
              nb === 2 ? "rotate-90" : "-rotate-90"
            }`}
            alt=""
            src="/icons/arrowlight.svg"
          />
        ) : (
          <img
            className={`cursor-pointer h-5 self-end ${
              nb === 2 ? "rotate-90" : "-rotate-90"
            }`}
            alt=""
            src="/icons/arrow.svg"
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
