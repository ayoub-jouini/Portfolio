"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mode, setMode] = useState<string>("Light");

  useEffect(() => {
    theme === "light" ? setMode("Light") : setMode("Dark");
  }, [theme, setTheme]);

  return (
    <div className="flex flex-row justify-between toggle">
      <label className="flex items-center cursor-pointer">
        <div className="mr-3 dark:text-white text-tertiary border-tertiary font-medium">
          {mode} Mode
        </div>
        <div className="relative">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          />
          <div className="block border-[1px] dark:border-white border-tertiary w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 dark:bg-white bg-tertiary w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeButton;
