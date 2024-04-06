import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import GitButton from "./GitButton";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-100 dark:bg-gray-900 text-black h-20 flex items-center justify-center text-base sticky top-0 z-20 ">
      <div className=" px-6 flex items-center justify-between text-base max-w-7xl w-full">
        <Link className="flex w-4/5 px-2 font-semibold text-4xl" to="/">
          <p className="ml-4 text-black dark:text-white">MAPV</p>
          <p className="text-purple-600 ">DEV</p>
        </Link>
        <div
          className="h-full items-center hidden text-black dark:text-white max-lg:block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuRoundedIcon style={{ color: "inherit", fontSize: 35 }} />
        </div>
        <div className="w-full flex items-center justify-center gap-8 px-2 list-none max-lg:hidden ">
          <a className="nav-link" href="#About">
            Sobre&nbsp;mi
          </a>
          <a className="nav-link" href="#Skills">
            Habilidades
          </a>
          <a className="nav-link" href="#Experience">
            Experiencia
          </a>
          <a className="nav-link" href="#Education">
            Educación
          </a>
          <a className="nav-link" href="#Projects">
            Proyectos
          </a>
        </div>
        {isOpen && (
          <ul className="w-full flex flex-col items-start gap-4 bg-opacity-95 dark:bg-opacity-95 bg-slate-100 dark:bg-slate-800 absolute top-20 right-0 pt-3 0 pb-6 px-10 text-black  lg:hidden">
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#About"
            >
              Sobre&nbsp;mi
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Skills"
            >
              Habilidades
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Experience"
            >
              Experiencia
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Education"
            >
              Educación
            </a>
            <a
              className="nav-link"
              onClick={() => setIsOpen(!isOpen)}
              href="#Projects"
            >
              Proyectos
            </a>
            <GitButton />
          </ul>
        )}
        <div className="w-4/5 h-full flex justify-end items-center px-2 max-lg:hidden bg-transparent ">
          <GitButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
