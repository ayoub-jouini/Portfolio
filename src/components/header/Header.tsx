"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import DarkModeButton from "../buttons/DarkModeButton";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "aboutme",
        "skills",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= window.scrollY + 200) {
          current = section;
        }
      }
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section: string) => section === currentSection;

  return (
    <div className="h-28">
      <nav className="w-full fixed bg-white1 dark:bg-primary1 z-20">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:grid md:grid-cols-8 md:gap-5 md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block md:col-span-1">
            <Link href="/">
              <h2 className="text-2xl dark:text-white text-primary1 font-bold">
                MAJ
              </h2>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-white text-primary1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-white text-primary1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`pb-3 mt-8 md:block md:col-span-5 md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="md:flex justify-between">
              <li className="dark:text-white my-10">
                <a
                  href="#aboutme"
                  className={`hover:text-tertiary dark:hover:text-secondary font-semibold ${
                    isActive("aboutme") && "text-tertiary dark:text-secondary"
                  }`}
                >
                  About Me
                </a>
              </li>
              <li className="dark:text-white my-10">
                <a
                  href="#skills"
                  className={`hover:text-tertiary dark:hover:text-secondary font-semibold ${
                    isActive("skills") && "text-tertiary dark:text-secondary"
                  }`}
                >
                  Skills
                </a>
              </li>
              <li className="dark:text-white my-10">
                <a
                  href="#experience"
                  className={`hover:text-tertiary dark:hover:text-secondary font-semibold ${
                    isActive("experience") &&
                    "text-tertiary dark:text-secondary"
                  }`}
                >
                  Experience
                </a>
              </li>
              <li className="dark:text-white my-10">
                <a
                  href="#education"
                  className={`hover:text-tertiary dark:hover:text-secondary font-semibold ${
                    isActive("education") && "text-tertiary dark:text-secondary"
                  }`}
                >
                  Education
                </a>
              </li>
              <li className="dark:text-white my-10">
                <a
                  href="#projects"
                  className={`hover:text-tertiary dark:hover:text-secondary font-semibold ${
                    isActive("projects") && "text-tertiary dark:text-secondary"
                  }`}
                >
                  Projets
                </a>
              </li>
              <li className="dark:text-white my-10">
                <a
                  href="#contact"
                  className={`hover:text-tertiary dark:hover:text-secondary font-semibold ${
                    isActive("contact") && "text-tertiary dark:text-secondary"
                  }`}
                >
                  Contact
                </a>
              </li>
              <li className="dark:text-white my-10">
                <div className="col-span-2 justify-self-end flex md:hidden">
                  <DarkModeButton />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-2 justify-self-end hidden md:flex">
            <DarkModeButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
