import React from "react";
import ImgProject from "../assets/images/nodispo.jpg";
const ProjectCard = ({ project, setOpenModal }) => {
  const imgM = project?.image === "" ? ImgProject : project?.image;
  return (
    <div
      className=" bg-white dark:bg-gray-950 cursor-pointer rounded-xl shadow-lg shadow-indigo-600 h-[500px] overflow-hidden text-ellipsis w-80 py-5 px-6 flex flex-col gap-3 hover:-translate-y-3 transform transition-all"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <img className=" h-44 w-full shadow-sm rounded-lg" src={imgM} />

      <div className="w-full flex items-center flex-wrap gap-8 mt-2">
        {project.tags?.map((tag, index) => (
          <div
            className="text-sm rounded-xl border-2 text-purple-500 py-1 px-2 border-purple-500 font-semibold"
            key={index}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="text-lg font-semibold dark:text-white max-w-full text-ellipsis line-clamp-3">
        {project.title}
      </div>
      <div className="text-xs font-medium text-gray-700 dark:text-gray-500">
        {project.date}
      </div>
      <div className="line-clamp-4 overflow-hidden font-normal text-gray-700 dark:text-gray-500">
        {project?.description && <div className="">{project.description}</div>}
      </div>
    </div>
  );
};

export default ProjectCard;
