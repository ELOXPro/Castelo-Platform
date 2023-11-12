
export const ColorPicker = (props) => {
  const {setColor} = props;
  return (
      <div className="grid grid-cols-5 w-full h-full p-2 gap-2">
        {colors.map((color, index) => (
          <button 
          onClick = {() => setColor(color)}
          className={` ${color} w-full h-full rounded-2xl`} key={index}>
          </button>
          ))}
      </div>
  )
}

const colors = [
  "bg-[rgb(255,255,255)]",
  "bg-[rgb(40,40,40)]",
  "bg-[rgb(255,0,0)]",
  "bg-[rgb(0,255,0)]",
  "bg-[rgb(0,0,255)]",
  "bg-[rgb(255,255,0)]",
  "bg-[rgb(255,0,255)]",
  "bg-[rgb(0,255,255)]",
  "bg-[rgb(125,125,125)]",
  "bg-[rgb(255,204,0)]",
  "bg-[rgb(255,153,0)]",
  "bg-[rgb(102,77,42)]",
  "bg-[rgb(255,102,179)]",
  "bg-[rgb(179,179,179)]",
  "bg-[rgb(0,0,125)]",
  "bg-[rgb(0,125,0)]",
];