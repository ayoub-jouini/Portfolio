"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {}

const SocialMediaIcons: React.FC<Props> = () => {
  const [mode, setMode] = useState<string>("dark");
  const { theme } = useTheme();

  useEffect(() => {
    theme === "light" ? setMode("light") : setMode("dark");
  }, [theme]);
  return (
    <div className="flex mt-7 md:mt-3 md:justify-start justify-center">
      <Link
        href="https://www.facebook.com/ayoub.jouini.79"
        target="_blank"
        rel="noreferrer"
      >
        {mode === "light" ? (
          <img alt="" src="/icons/facebookicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/facebookicon.svg" className="mr-3" />
        )}
      </Link>
      <Link
        href="https://www.linkedin.com/in/mohamed-ayoub-jouini-254152205/"
        target="_blank"
        rel="noreferrer"
      >
        {mode === "light" ? (
          <img alt="" src="/icons/linkedinicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/linkedinicon.svg" className="mr-3" />
        )}
      </Link>
      <Link
        href="https://github.com/ayoub-jouini"
        target="_blank"
        rel="noreferrer"
      >
        {mode === "light" ? (
          <img alt="" src="/icons/githubicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/githubicon.svg" className="mr-3" />
        )}
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
