import React from "react";
import { experiences } from "../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const Experiences = () => {
  return (
    <div
      id="Experience"
      className="relative flex flex-col items-center justify-center z-10 mt-24 max-lg:flex-col"
    >
      <div className="relative flex flex-col justify-between items-center">
        <div className="text-4xl text-center font-semibold dark:text-white">
          Experiencia
        </div>
        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
