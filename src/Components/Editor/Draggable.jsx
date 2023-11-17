import React, { useEffect, useState } from "react";
import useDragger from "./useDragger";

export const Draggable = (props) => {
  const { editmode, name, type, sticker, selected, setSelected, view, color, size, rotation, flipV, flipH, text, font } = props;
  const item = name;
  let onview;
  const [screen, setScreen] = useState(window.innerWidth);
  const [txtsize, setTxtSize] = useState(screen <= 768 ? size * screen / 360 : (size * screen / 360) / 2);

  useEffect(() => {
    // Update screen width when it changes
    const handleResize = () => {
      setScreen(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial calculation of txtsize
    setTxtSize(screen <= 768 ? size * screen / 360 : (size * screen / 360) / 2);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, screen]);

  if (type === "arts") {
    onview = <img src={`/Assets/stickers/arts/${sticker}.png`} alt="sticker" className={`w-full h-full`} />;
  } else if (type === "mono") {
    onview = (
      <svg className={`w-1/2 ${color} transition-all`} xmlns="http://www.w3.org/2000/svg" viewBox={view}>
        <g>
          <path d={sticker} />
        </g>
      </svg>
    );
  } else if (type === "text") {
    onview = text;
  }

  useDragger(item);

  const containerStyle = {
    width: size + "%",
    height: size + "%",
    whiteSpace: "nowrap",
    fontSize: txtsize + "px",
    transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
  };

  return (
    <button
      onClick={() => setSelected(item)}
      id={item}
      className={`absolute ${font} ${color} flex justify-center items-center top-1/2 left-1/2 ${editmode ? "z-40" : ""} hover:opacity-75 ${selected && editmode ? "z-50 border" : ""} border-green-500`}
      style={containerStyle}
    >
      {onview}
      <div className="w-full h-full absolute top-0 left-0" />
    </button>
  );
};
