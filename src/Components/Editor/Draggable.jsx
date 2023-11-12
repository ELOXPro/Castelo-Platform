import React from "react";
import useDragger from "./useDragger";


export const Draggable = (props) => {
  const {editmode} = props
  useDragger("small-circle");

  return (
    <div id="small-circle" className={`absolute ${editmode ? "z-40":""} cursor-pointer hover:opacity-50  rounded-full w-24 h-24 bg-red-900`}>
    </div>
  );
};
