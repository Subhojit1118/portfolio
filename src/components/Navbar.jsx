import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItem } from "../constants";
const Navbar = () => {
  const [nav, setNav] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  return (
    <>
      <div className=" py-6 flex items-center justify-between text-white">
        <h4 className="font-black">CLARK</h4>
        <ul className="flex gap-6">
          {navItem.map((item, index) => {
            return (
              <>
                <li
                  className="nav list-none"
                  key={index}
                  onClick={() => {
                    setNav(item.title);
                  }}
                >
                  <a href={`${item.url}`} className={`py-1`}>
                    {item.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
