import React, { useEffect, useState } from "react";
import { projects } from "../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  useEffect(() => {}, [toggle]);

  return (
    <div
      id="Projects"
      className="flex flex-col justify-center items-center relative z-10 px-4 mt-20"
    >
      <div className="flex justify-between relative items-center flex-col gap-3 w-full max-w-6xl">
        <div className="text-4xl text-center font-semibold dark:text-white">
          Proyectos
        </div>
        <div className="flex border-2 rounded-xl border-purple-600 my-6 font-bold font-mono text-base text-purple-600">
          <button
            className="px-5 py-2 cursor-pointer hover:bg-purple-500/10 rounded-xl "
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </button>
          <div className="w-[1.5px] bg-purple-600"></div>
          <button
            className="px-5 py-2 cursor-pointer hover:bg-purple-500/10 rounded-xl "
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP'S
          </button>
          <div className="w-[1.5px] bg-purple-600"></div>
          <button
            className="px-5 py-2 cursor-pointer hover:bg-purple-500/10 rounded-xl "
            active={toggle === "mobile app"}
            onClick={() => setToggle("mobile app")}
          >
            MOBILE APP'S
          </button>
        </div>
        <div className="grid gap-12 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {toggle == "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
