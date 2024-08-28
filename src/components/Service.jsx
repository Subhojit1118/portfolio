import React, { useState } from "react";
import { serviceItem } from "../constants";
import { web1 } from "../assets";

const Service = () => {
  const [divColor, setDivColor] = useState("[#ffbd39]");
  const [title, setTitle] = useState("");
  const handleMouseOver = (index) => {
    setDivColor("black");
  };

  const handleMouseOut = () => {
    setDivColor("[#ffbd39]");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-white font-black">Services</h1>
        <p className="text-neutral-500 mt-6 mb-10 max-w-[50rem]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="grid grid-rows-2 grid-cols-3 gap-10">
          {serviceItem.map((item, index) => {
            return (
              <>
                <div
                  className="flex flex-col items-center justify-center py-12 px-28 gap-5 text-start bg-[#1a1a1a] text-white hover:bg-[#ffbd39] hover:text-black"
                  id={index}
                  key={index}
                  onMouseOver={() => {
                    handleMouseOver(index);
                    setTitle(item.title);
                  }}
                  onMouseOut={handleMouseOut}
                >
                  <img src={web1} alt="" />
                  <p className=" font-bold text-xs">{item.title}</p>
                  <div
                    className={`w-10 h-[0.05rem] bg-${
                      item.title === title ? divColor : "[#ffbd39]"
                    }`}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
