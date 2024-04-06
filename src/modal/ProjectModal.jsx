import React from "react";
import { Modal } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import ImgProject from "../assets/images/nodispo.jpg";
const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const imgM = project?.image === "" ? ImgProject : project?.image;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="flex w-full h-full absolute top-0 left-0  align-top justify-center overflow-y-scroll transition-all ease-linear ">
        <div className="flex flex-col relative w-full rounded-2xl max-w-3xl h-min p-5 my-10 mx-3 bg-gray-400 dark:bg-slate-900 items-start justify-center">
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={imgM}
            className="mt-8 shadow-lg object-cover rounded-xl w-full max-w-96 self-center"
          />
          <div className="w-full flex items-center flex-wrap gap-8 mt-2">
            {project.tags?.map((tag, index) => (
              <div
                className="text-sm rounded-xl border-2 text-purple-500 py-1 px-2 border-purple-500"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-lg font-semibold  max-w-full text-ellipsis line-clamp-3">
            {project.title}
          </div>
          <div className="text-xs font-medium text-black dark:text-white">
            {project.date}
          </div>
          <div className="line-clamp-4 overflow-hidden font-normal text-black dark:text-white my-5">
            {project?.description && (
              <div className="">{project.description}</div>
            )}
          </div>
          <div className="flex justify-end my-3 gap-3 w-full">
            {project?.github === "" ? (
              <button
                className="w-full text-center cursor-not-allowed bg-gray-500 text-lg py-3 rounded-full text-white"
                disabled
                target="new"
              >
                Ver Código
              </button>
            ) : (
              <a
                className="w-full text-center bg-purple-500 text-lg py-3 rounded-full text-white hover:bg-white hover:text-purple-500"
                href={project?.github}
                target="new"
              >
                Ver Código
              </a>
            )}
            {project?.webapp === "" ? (
              <button
                className="w-full text-center cursor-not-allowed bg-gray-500  text-lg py-3 rounded-full text-white "
                disabled
                target="new"
              >
                Ver DEMO
              </button>
            ) : (
              <a
                className="w-full text-center  bg-purple-500 text-lg py-3 rounded-full text-white hover:bg-white hover:text-purple-500"
                href={project?.webapp}
                target="new"
              >
                Ver DEMO
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
