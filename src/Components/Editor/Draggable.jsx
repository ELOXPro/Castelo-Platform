import React from "react";
import useDragger from "./useDragger";


export const Draggable = (props) => {
  const {editmode, name, type, sticker, selected, setSelected, view, color} = props
  let item = name
  let onview;
  if (type === "arts"){
    let colors = "bg-" + color
    onview = <img src={`/Assets/stickers/arts/${sticker}.png`} alt="sticker" className={`w-full h-full ${colors}`}/>
  }
  else if (type === "mono"){
    let colors = "fill-"+color
    console.log(colors)
    onview = <svg className={`w-1/2 ${colors} transition-all`} xmlns="http://www.w3.org/2000/svg" viewBox={view}>
    <g>
    <path  d={sticker}/>
    </g>
    </svg>
  }
  useDragger(item);

  return (
    <button onClick={()=>setSelected(item)} id={item} className={`absolute flex justify-center items-center top-1/2 left-1/2 ${editmode ? "z-40":""} hover:opacity-75 ${selected && editmode ? "border-4":""}  border-green-500 w-1/4 h-1/4`}>
      {onview}
      <div className="w-full h-full absolute top-0 left-0"/>
    </button>
  );
};
