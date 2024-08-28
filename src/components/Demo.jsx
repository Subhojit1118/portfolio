import React from 'react'
import { IoMdClose } from "react-icons/io";
const Demo = () => {
  return (
    <div className=" bg-white top-10 w-[614px] py-2 rounded-lg flex items-center justify-center gap-2">
      <p>
        <b>Success!</b> Changes have been saved successfully! import {IoMdClose}{" "}
        from "react-icons/io";
      </p>
      <div className="cursor-pointer">
        <IoMdClose color='grey'/>
      </div>
    </div>
  );
}

export default Demo
