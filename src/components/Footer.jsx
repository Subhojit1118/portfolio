import React from "react";
import { footLinks, footService } from "../constants";
import { FaFacebookF, FaInstagram, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-4 mt-24 ">
        <div className="p-3">
          <h5 className="text-white font-bold text-xl">About</h5>
          <p className="text-neutral-500 mt-6 mb-10">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center justify-center h-10 w-10 bg-[#1a1a1a] rounded-full">
              <a href="#">
                <FaGithub size={24} color="grey" />
              </a>
            </div>
            <div className="flex items-center justify-center h-10 w-10 bg-[#1a1a1a] rounded-full">
              <a href="#">
                <FaFacebookF size={24} color="grey" />
              </a>
            </div>
            <div className="flex items-center justify-center h-10 w-10 bg-[#1a1a1a] rounded-full">
              <a href="#">
                <FaInstagram size={24} color="grey" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-white font-bold text-xl">Links</h3>
          <ul className="flex flex-col gap-2 text-neutral-500 mt-8 mb-10">
            {footLinks.map((item, index) => {
              return (
                <>
                  <li className=" list-none" key={index}>
                    <a href={item.url} className="hover:text-[#ffbd39]">
                      {item.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="p-3">
          <h3 className="text-white font-bold text-xl">Services</h3>
          <ul className="flex flex-col gap-2 text-neutral-500 mt-8 mb-10">
            {footService.map((item, index) => {
              return (
                <>
                  <li className=" list-none" key={index}>
                    <a href={item.url} className="hover:text-[#ffbd39]">
                      {item.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="p-3 ">
          <h3 className="text-white font-bold text-xl">Have a Question?</h3>
          <div className="text-neutral-500 mt-8 mb-10">
            <div className="flex gap-6">
              <FaLocationDot size={30} />
              <p className="text-neutral-500">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div className="flex gap-6 py-6">
              <FaPhoneAlt size={18} />
              <p className="text-neutral-500">+91 8972221071</p>
            </div>
            <a href="mailto:hsubhojit996@gmail.com" className="flex gap-6">
              <MdEmail size={22} />
              <p className="text-neutral-500">hsubhojit996@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral-500 mt-7 mb-10"></div>
      <p className="text-neutral-500 text-center mb-2">
        Copyright ©2024 All rights reserved | This template is made by Subhojit
      </p>
    </>
  );
};

export default Footer;
