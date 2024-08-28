import React from "react";
import ColorSlider from "./MuiSlider";
const Skill = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-white font-black">My skill</h1>
        <p className="text-neutral-500 mt-6 mb-10 max-w-[50rem]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="w-full grid grid-rows-1 grid-cols-2">
          <div className="w-1/2 ">{ColorSlider()}</div>
          <div className="w-1/2">{ColorSlider()}</div>
        </div>
      </div>
    </>
  );
};

export default Skill;
