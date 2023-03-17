import React from "react";
import "../App.css";
import { sData } from "../data/SkillsData";

export const Skills = () => {
  const handleOnChange = () => {};

  return (
    <div className="mt-20 mb-44 text-center text-4xl">
      <h1 className="font-inter font-bold">Skills</h1>
      <br />
      <div className="flex justify-center space-x-12 items-center">
        {sData.map((a) => {
          return (
            <div>
              <img className="mx-auto h-32 w-32" src={a.img} alt={a.name} />
              <p className="flex flex-row mx-auto p-2 text-2xl font-Inter font-semibold ">
                {a.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
