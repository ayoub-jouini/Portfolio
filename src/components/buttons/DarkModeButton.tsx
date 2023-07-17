"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  let mode: string = "Dark";
  useEffect(() => {
    theme === "light" ? (mode = "Light") : (mode = "Dark");
  }, [theme, setTheme]);

  return (
    <div className="flex flex-row justify-between toggle">
      <label className="flex items-center cursor-pointer">
        <div className="mr-3 dark:text-white text-priborder-primary1 font-medium">
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
          <div className="block border-[1px] dark:border-white border-primary1 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 dark:bg-white bg-primary1 w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeButton;
