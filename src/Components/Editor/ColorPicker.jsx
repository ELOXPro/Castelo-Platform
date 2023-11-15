
export const ColorPicker = (props) => {
  const {setColor} = props;
  return (
      <div className="grid grid-cols-5 w-full h-full p-2 gap-2">
        {Colors.map((color, index) => (
          <button 
          onClick = {() => setColor(color.back)}
          className={`${color.back} w-full h-full rounded-2xl shadow-lg shadow-zinc-700 dark:shadow-white`} key={index}>
          </button>
          ))}
      </div>
  )
}

export const Colors = [
  {
  back:"bg-[rgb(255,255,255)]",
  fill:"fill-[rgb(255,255,255)]",
  text:"text-[rgb(255,255,255)]",
  },
  {
    back:"bg-[rgb(40,40,40)]",
    fill:"fill-[rgb(40,40,40)]",
    text:"text-[rgb(40,40,40)]",
  },
  {
    back:"bg-[rgb(255,0,0)]",
    fill:"fill-[rgb(255,0,0)]",
    text:"text-[rgb(255,0,0)]",
  },
  {
    back:"bg-[rgb(0,255,0)]",
    fill:"fill-[rgb(0,255,0)]",
    text:"text-[rgb(0,255,0)]",
  },
  {
    back:"bg-[rgb(0,0,255)]",
    fill:"fill-[rgb(0,0,255)]",
    text:"text-[rgb(0,0,255)]",
  },
  {
    back:"bg-[rgb(255,255,0)]",
    fill:"fill-[rgb(255,255,0)]",
    text:"text-[rgb(255,255,0)]",
  },
  {
    back:"bg-[rgb(255,0,255)]",
    fill:"fill-[rgb(255,0,255)]",
    text:"text-[rgb(255,0,255)]",
  },
  {
    back:"bg-[rgb(0,255,255)]",
    fill:"fill-[rgb(0,255,255)]",
    text:"text-[rgb(0,255,255)]",
  },
  {
    back:"bg-[rgb(125,125,125)]",
    fill:"fill-[rgb(125,125,125)]",
    text:"text-[rgb(125,125,125)]",
  },
  {
    back:"bg-[rgb(255,204,0)]",
    fill:"fill-[rgb(255,204,0)]",
    text:"text-[rgb(255,204,0)]",
  },
  {
    back:"bg-[rgb(255,153,0)]",
    fill:"fill-[rgb(255,153,0)]",
    text:"text-[rgb(255,153,0)]",
  },
  {
    back:"bg-[rgb(102,77,42)]",
    fill:"fill-[rgb(102,77,42)]",
    text:"text-[rgb(102,77,42)]",
  },
  {
    back:"bg-[rgb(255,102,179)]",
    fill:"fill-[rgb(255,102,179)]",
    text:"text-[rgb(255,102,179)]",
  },
  {
    back:"bg-[rgb(179,179,179)]",
    fill:"fill-[rgb(179,179,179)]",
    text:"text-[rgb(179,179,179)]",
  },
  {
    back:"bg-[rgb(0,0,125)]",
    fill:"fill-[rgb(0,0,125)]",
    text:"text-[rgb(0,0,125)]",
  },
  {
    back:"bg-[rgb(0,125,0)]",
    fill:"fill-[rgb(0,125,0)]",
    text:"text-[rgb(0,125,0)]",
  },
];