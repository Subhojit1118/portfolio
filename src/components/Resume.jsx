import React from 'react'
import { resumeItem } from '../constants';
import cv from '../assets/images/cv.pdf';
const Resume = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-24 ">
        <h1 className="text-white font-black">Resume</h1>
        <p className="text-neutral-500 mt-6 mb-10 max-w-[50rem]">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <div className="grid grid-rows-3 grid-cols-2 gap-10 mb-14">
          {resumeItem.map((item, index) => {
            return (
              <>
                <div
                  className=" flex flex-col items-start justify-start py-8 px-8 gap-5 text-start bg-[#1a1a1a] text-white"
                  id={index}
                >
                  <h4 className="text-[#ffbd39] font-black">{item.date}</h4>
                  <h4 className="font-thin">{item.title}</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    {item.college}
                  </p>
                  <p className="text-neutral-500 text-sm">{item.description}</p>
                </div>
              </>
            );
          })}
        </div>
        <button className="bg-[#ffbd39] text-black px-7 py-4 rounded-full font-bold text-xs">
          <a href={cv} download="resume">
            DOWNLOAD CV
          </a>
        </button>
      </div>
    </>
  );
}

export default Resume
