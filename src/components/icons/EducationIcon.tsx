"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {}

const EducationIcon: React.FC<Props> = () => {
  const [mode, setMode] = useState<string>("dark");
  const { theme } = useTheme();

  useEffect(() => {
    theme === "light" ? setMode("light") : setMode("dark");
  }, [theme]);
  return (
    <>
      {mode === "light" ? (
        <img
          className={`mr-10 md:h-full h-40`}
          alt="educationlight"
          src="/icons/educationlight.svg"
        />
      ) : (
        <img
          className={`mr-10 md:h-full h-40`}
          alt="education"
          src="/icons/education.svg"
        />
      )}
    </>
  );
};

export default EducationIcon;
