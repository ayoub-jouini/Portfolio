"use client";

import Link from "next/link";
import Button from "../buttons/Button";
import { useTheme } from "next-themes";

interface Props {}

const CallToAction: React.FC<Props> = () => {
  const { theme } = useTheme();
  return (
    <div
      id="aboutme"
      className="px-4 md:px-8 mx-auto lg:max-w-7xl md:grid flex flex-col md:gap-5 md:grid-cols-2 items-center overflow-hidden"
    >
      <div className="z-10">
        <h1 className="font-semibold text-xl md:text-4xl text-secondary">
          I am a Software Developer
        </h1>
        <p className="text-sm md:text-xl my-8 md:my-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat
          nostrum quae assumenda laudantium fuga possimus, vel quia, porro quos
          pariatur quaerat harum enim earum exercitationem culpa. Perspiciatis,
          enim maiores!
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <Link href="#projects">
              <Button title="See Project" />
            </Link>
          </div>
          <div className="md:mx-5 mt-5 md:mt-0">
            <Link href="#contact">
              <Button title="Contact Me" style="outlined" />
            </Link>
          </div>
        </div>
      </div>
      {theme === "dark" ? (
        <img
          alt="mohamed-ayoub-jouini"
          src="/images/me.png"
          className="h-64 md:h-full -mt-36 ml-40  md:m-0"
        />
      ) : (
        <img
          alt="mohamed-ayoub-jouini"
          src="/images/melight.png"
          className="h-64 md:h-full -mt-36 ml-40  md:m-0 "
        />
      )}
    </div>
  );
};

export default CallToAction;
