"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  skill: string;
}

const SkillIcon: React.FC<Props> = ({ skill }) => {
  const [mode, setMode] = useState<string>("dark");
  const { theme } = useTheme();

  useEffect(() => {
    theme === "light" ? setMode("light") : setMode("dark");
  }, [theme]);
  return (
    <img
      className={`cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-100 ${
        mode === "light" && "filter-primary"
      }`}
      alt={skill}
      src={`/icons/${skill}.svg`}
    />
  );
};

export default SkillIcon;
