"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

const ContactIcon: React.FC<Props> = ({ name }) => {
  const [mode, setMode] = useState<string>("light");
  const { theme } = useTheme();

  useEffect(() => {
    theme === "light" ? setMode("light") : setMode("dark");
  }, [theme]);
  return (
    <>
      {mode === "light" ? (
        <img className="" alt={`${name}`} src={`/icons/${name}light.svg`} />
      ) : (
        <img className="" alt={`${name}`} src={`/icons/${name}.svg`} />
      )}
    </>
  );
};

export default ContactIcon;
