import { useEffect, useState } from "react";
import { EditorIconButton } from "../UI/EditorInterface";
import { Colors } from "./ColorPicker";
import { PrimaryButton } from "../UI/EditorInterface";

export const TextAdder = ({ onSelectElement, onDeleteElement, onChangeColorElement,onChangeSizeElement,onChangeRotationElement,onFlipVElement,onFlipHElement, selectedElement, onChangeText, onChangeFont}) => {
    const [font, setFont] = useState(null);
    const [number, setNumber] = useState(0);
    const [size, setSize] = useState(selectedElement ? selectedElement.size : 25);
    const [text, setText] = useState(selectedElement ? selectedElement.text : "Your Text");
    const [rotation, setRotation] = useState(selectedElement ? selectedElement.rotation : 0);
    const [color, setColor]= useState(null);
    const [flipH, setFlipH] = useState(selectedElement ? selectedElement.flipH : false);
    const [flipV, setFlipV] = useState(selectedElement ? selectedElement.flipV : false);

    useEffect(() => {
      if (selectedElement) {
        setText(selectedElement.text);
        } else {
          setText("Your Text Here");
        }
      if (selectedElement) {
        setSize(selectedElement.size);
      } else {
        setSize(25);
      }
      if (selectedElement) {
        setRotation(selectedElement.rotation);
      } else {
        setRotation(0);
      }
      if (selectedElement) {
        setFlipH(selectedElement.flipH);
      } else {
        setFlipH(false);
      }
      if (selectedElement) {
        setFlipV(selectedElement.flipV);
      } else {
        setFlipV(false);
      }
    }, [selectedElement]);
  
    const handleClick = (e, name) => {
      setNumber(number + 1);
      if (name === "add") {
        if (font){
        onSelectElement({
          name: text + number,
          font: font,
          type: "text",
          rotation: 0,
          text: "Your Text Here",
          size: 25,
          color: color,
          flipH: false,
          flipV: false,
          id: Date.now(),
        });}
        else{alert("Please Choose A Font")}
      }     
      if (name === "delete") {
        onDeleteElement();
      }
    };
    const handleColor = (e, color) => {
        setColor(color)
        if (selectedElement) {
          onChangeColorElement(color);
        }else {
          alert("Please Select an item to change Color (Edit Mode)");
        }}
    const handleflipH = (e) => {
        setFlipH(!flipH)
        if (selectedElement) {
          onFlipHElement(!flipH);
        }else {
          alert("Please Select an item to Flip (Edit Mode)");
        }}
    const handleflipV = (e) => {
        setFlipV(!flipV)
        if (selectedElement) {
          onFlipVElement(!flipV);
        }else {
          alert("Please Select an item to Flip (Edit Mode)");
        }}
          
    const handleSetSize = (e) => {
        let newSize = parseFloat(e.target.value);
        if (!isNaN(newSize) && newSize >= 1 && newSize <= 75) {
          setSize(newSize);
          if (selectedElement) {
            onChangeSizeElement(newSize);
          }else {
            alert("Please Select an item to change Size (Edit Mode)");
          }
          } else {
          alert("Please enter a valid size between 1 and 75");
          }
        };

    const handleSetRotation = (e) => {
        let newRotation = parseFloat(e.target.value);
        if (!isNaN(newRotation) && newRotation >= -360 && newRotation <= 360) {
          setRotation(newRotation);
          if (selectedElement) {
            onChangeRotationElement(newRotation);
          }else {
            alert("Please Select an item to change Rotation (Edit Mode)");
          }
        } else {
          alert("Please enter a valid Degree between -360 and 360");
        }
      };
    const handleSetText = (e) => {
        let newText = e.target.value;
        setText(newText);
        if (selectedElement) {
            onChangeText(newText);
        }
      };
    
      const handleSetFont = (e, font) => {
        setFont(font);
        if (selectedElement) {
            onChangeFont(font);
        }
      };
          

    return (
        <div className="flex flex-col justify-center w-full h-full overflow-hidden gap-0 md:gap-2 p-0.5 md:p-2">
        <div className="flex flex-row w-full h-[70%] overflow-hidden">
        <div className="flex flex-col w-[35%] md:w-1/2 h-full overflow-y-auto">
        <h1 className="text-center text-base md:text-2xl font-mono font-bold text-green-500">Fonts</h1>
        <div className="flex flex-col w-full h-full p-2 gap-0 overflow-y-scroll">
        {fonts.map((font, index) => (
        <div className="w-full h-auto flex justify-center" key={index}>
        <input
        type="radio" onChange= {(e) => handleSetFont(e, font.font)} id={font.name} name="font" value="fonts" className="hidden peer"/>
        <label htmlFor={font.name} className={`peer-checked:bg-green-500 border-b border-green-500 w-full h-full flex justify-center p-2`} key={index}>
        <h1 className={`text-center text-base md:text-2xl ${font.font} text-zinc-700 dark:text-white`}>{font.name}</h1>
        </label>
        </div>
        ))}
        </div>
        </div>
        <div className="flex flex-col w-[65%] md:w-1/2 h-full overflow-y-auto">
        <h1 className="text-center text-base md:text-2xl font-mono font-bold text-green-500">Properties</h1>
        <div className="flex flex-col w-full h-full gap-1 overflow-y-auto p-1">
        <div className="flex flex-row w-full h-1/4 gap-1  justify-start items-center">
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">size</h1>
        <input
          className="w-1/4 h-full md:h-1/2 shadow appearance-none border rounded py-2 px-3 text-zinc-700 dark:text-zinc-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="size"
          placeholder="Size"
          value={size}
          onChange={handleSetSize}
        />
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">rotate</h1>
        <input
          className="w-1/4 h-full md:h-1/2 shadow appearance-none border rounded py-2 px-3 text-zinc-700 dark:text-zinc-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="size"
          placeholder="Rotate"
          value={rotation}
          onChange={handleSetRotation}
        />
        </div>
        <div className="flex flex-row w-full h-1/4 gap-1  justify-start items-center">
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">Flip-H</h1>
        <PrimaryButton label="Flip" onClick={handleflipH}/>
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">Flip-V</h1>
        <PrimaryButton label="Flip" onClick={handleflipV}/>
        </div>
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">color</h1>
        <div className="grid grid-cols-8 w-full h-full md:h-1/4">
        {Colors.map((color, index) => (
          <button 
          onClick = {(e) => handleColor(e, color.text)}
          className={`${color.back} w-full h-full`} key={index}>
          </button>
          ))}
        </div>
        </div>
        </div>
        </div>
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">Enter Your Text Here</h1>
        <input
          className="w-full h-8 md:h-10 shadow appearance-none border border-green-500 rounded-full py-2 px-3 text-zinc-700 dark:text-zinc-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="text"
          value={text}
          onChange={handleSetText}
        />
        <div className="flex flex-row justify-start items-center rounded-2xl border border-green-500 w-full overflow-hidden">
        {inspectors.map((item, index) => (
            <EditorIconButton
            onClick={(e) => handleClick(e, item.name)}
            label={item.label}
            view={item.view}
            name={item.name}
            key={index}
            index={index}
          />))}
        </div>
        </div>
    )
  }
  const inspectors = [
    {
        label:"M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z",
        view:"0 0 122.875 122.648",
        name: "add",
    },
    {
        label:"M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z",
        view:"0 0 109.484 122.88",
        name: "delete",
    },
  ];

  const fonts = [{
    name:"organical",
    font:"font-organical",
  },
  {
    name:"text-talk",
    font:"font-textalk",
  },
  ];