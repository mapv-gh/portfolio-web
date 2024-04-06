import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="flex flex-col relative justify-between items-center w-full max-w- 6xl max-lg:flex-co py-6">
        <div className="text-4xl text-center font-semibold dark:text-white">
          Habilidades
        </div>
        <div className="w-full flex flex-wrap gap-12 mt-16 justify-center">
          {skills.map((skill, index) => (
            <div
              key={`index-${index}`}
              className="w-full max-w-md dark:text-white bg-white dark:bg-gray-950  shadow-lg dark:shadow-indigo-500/50  shadow-indigo-600  rounded-2xl py-4 px-8 hover:scale-105 delay-200 max-sm:max-w-96 max-sm:py-3 max-md:max-w-md transition-all max-2xl:max-w-lg"
            >
              <div className="text-3xl font-semibold mb-5 text-center dark:text-white">
                {skill.title}
              </div>
              <div className="flex flex-wrap gap-3 mb-5 justify-center">
                {skill.skills.map((item, index) => (
                  <div
                    key={`skill-x-${index}`}
                    className="border-2 rounded-2xl border-black dark:border-white flex justify-center py-3 items-center gap-2 px-4 min-h-6 font-semibold"
                  >
                    <img width={24} src={item.image} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
