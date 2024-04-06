import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../data/constants";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 relative z-10 py-8 ">
      <div className="w-full max-w-7xl p-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 font-semibold text-xl max-md:text-base max-sm:flex-wrap max-w-3xl">
          <a
            className="hover:text-purple-500 transition-colors duration-300 dark:text-white"
            href="#About"
          >
            Sobre mi
          </a>
          <a
            className="hover:text-purple-500 transition-colors duration-300 dark:text-white"
            href="#Skills"
          >
            Habilidades
          </a>
          <a
            className="hover:text-purple-500 transition-colors duration-300 dark:text-white"
            href="#Experience"
          >
            Experiencia
          </a>
          <a
            className="hover:text-purple-500 transition-colors duration-300 dark:text-white"
            href="#Education"
          >
            Educación
          </a>
          <a
            className="hover:text-purple-500 transition-colors duration-300 dark:text-white"
            href="#Projects"
          >
            Projectos
          </a>
        </div>
        <div className="flex">
          <a
            className="inline-block dark:text-white"
            href={Bio.linkedin}
            target="display"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
