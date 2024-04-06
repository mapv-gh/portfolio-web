import React from "react";
import "../App.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="w-[90%] bg-white dark:bg-gray-950 p-5 mt-16 rounded-3xl shadow-lg shadow-indigo-600 mx-auto max-w-3xl">
      <div className="w-full flex max-w-xl gap-3 mb-6">
        <img
          className="h-12 w-12 rounded-xl mt-1 max-md:h-10"
          src={experience.img}
        />
        <div className="max-w-xl flex-col flex">
          <div className="text-black dark:text-white text-lg font-semibold max-md:text-sm">
            {experience.role}
          </div>
          <div className="text-black dark:text-white text-sm font-medium max-md:text-sm">
            {experience.company}
          </div>
          <div className="text-black dark:text-white text-xs font-normal ">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="text-black dark:text-white w-4xl text-base mb-2 mx-auto font-semibold">
        {experience?.desc && (
          <div className="max-w-full span">{experience.desc}</div>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="w-full flex gap-3 font-normal">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2">
                {experience?.skills?.map((skill, index) => (
                  <>
                    {index === 0 ? "" : "•"}
                    <div className="text-indigo-500 text-sm border-2 border-indigo-500 rounded-xl flex justify-center px-2 py-1 font-semibold">
                      {skill}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
