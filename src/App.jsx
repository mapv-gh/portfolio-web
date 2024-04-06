import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Button from "@mui/material/Fab";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectModal from "./modal/ProjectModal";

function App() {
  const [theme, setTheme] = useState("light");
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const Icon = theme === "dark" ? WbSunnyIcon : DarkModeIcon;

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const fabStyle = {
    position: "fixed",
    bottom: 35,
    right: 35,
    color: "black",
    background: "white",
    border: "1px solid rgba(0, 0, 0)",
  };
  const fab = {
    sx: fabStyle,
  };
  return (
    <div className="font-thin">
      <BrowserRouter>
        <NavBar />
        <div className="bg-slate-100 dark:bg-gray-900 w-full overflow-x-hidden relative">
          <AnimatePresence>
            <Hero />
            <div className="pb-24 w-full wrapper flex-col items-center justify-center bg-gradient-to-b from-slate-100 from-75% to-blue-300 dark:from-gray-900 dark:to-indigo-950">
              <Skills />
              <Experiences />
            </div>
            <div className="pb-24 w-full wrapper flex-col items-center justify-center bg-gradient-to-b from-slate-100 from-75% to-blue-400 dark:from-gray-900 dark:to-indigo-950">
              <Education />
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </div>
          </AnimatePresence>
          <Button sx={fab.sx} size={fab.size} onClick={handleChangeTheme}>
            <Icon />
          </Button>
          <Footer />
          {openModal.state && (
            <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
