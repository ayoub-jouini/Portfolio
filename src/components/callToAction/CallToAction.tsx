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
      className="px-4 md:px-8 mx-auto lg:max-w-7xl grid gap-5 grid-cols-2 items-center "
    >
      <div className="">
        <h1 className="font-semibold text-4xl text-secondary">
          I am a Software Developer
        </h1>
        <p className="text-xl my-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat
          nostrum quae assumenda laudantium fuga possimus, vel quia, porro quos
          pariatur quaerat harum enim earum exercitationem culpa. Perspiciatis,
          enim maiores!
        </p>
        <div className="flex">
          <div className="">
            <Link href="#projects">
              <Button title="See Project" />
            </Link>
          </div>
          <div className="mx-5">
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
          className="h-full "
        />
      ) : (
        <img
          alt="mohamed-ayoub-jouini"
          src="/images/melight.png"
          className="h-full "
        />
      )}
    </div>
  );
};

export default CallToAction;
