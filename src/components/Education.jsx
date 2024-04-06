import React from "react";
import { education } from "../data/constants";
import EducationCard from "../cards/EducationCard";

const Education = () => {
  return (
    <div id="Education" className="mt-24">
      <div>
        <div className="text-4xl text-center font-semibold dark:text-white">
          Educación
        </div>
        <>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Education;
