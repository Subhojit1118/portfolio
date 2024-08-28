import React from "react";
import profile from "../assets/images/profile-img.jpg";
import { aboutItem } from "../constants";
const About = () => {
  return (
    <>
      <div className="flex items-center mt-24">
        <img className="w-1/2 mr-12 pr-8" src={profile} alt="profile" />
        <div className="w-1/2 flex flex-col items-start ">
          <h1 className="text-white font-black">About Me</h1>
          <p className="my-8 text-neutral-400">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex flex-col gap-5">
            {aboutItem.map((item, index) => {
              return (
                <>
                  <div className="flex gap-4 w-full" id={index}>
                    <p className="text-white w-1/3">{item.key}</p>
                    <p className="text-neutral-400 w-2/3">{item.value}</p>
                  </div>
                </>
              );
            })}
          </div>
          <button className="bg-[#ffbd39] text-black px-7 py-4 my-8 rounded-full font-bold text-xs">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
