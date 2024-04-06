import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="w-[90%] bg-white dark:bg-gray-950 p-5 mt-16 rounded-3xl shadow-lg shadow-indigo-600 mx-auto max-w-3xl">
      <div className="w-full flex max-w-xl gap-3 pb-5 justify-start">
        <img
          className="h-16 w-16 rounded-sm mt-1  bg-white "
          src={education.img}
        />
        <div className="max-w-xl flex-col flex">
          <div className="text-black dark:text-white text-lg font-bold max-md:text-sm">
            {education.school}
          </div>
          <div className="text-black dark:text-white text-sm font-medium max-md:text-sm">
            {education.degree}
          </div>
          <div className="text-black dark:text-white text-xs font-normal ">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-black dark:text-white w-4xl text-base mb-2 mx-auto font-semibold">
        {education?.desc && (
          <div className="max-w-full span">{education.desc}</div>
        )}
        {education?.skills && (
          <>
            <br />
            <div className="w-full flex gap-3 ">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2">
                {education?.skills?.map((skill, index) => (
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

export default EducationCard;
