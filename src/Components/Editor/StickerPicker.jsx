import { useEffect, useState } from "react";
import { EditorIconButton, EditorIconButton2 } from "../UI/EditorInterface";
import { Colors } from "./ColorPicker";
import { PrimaryButton } from "../UI/EditorInterface";

export const StickerPicker = ({ onSelectElement, onDeleteElement, onChangeColorElement,onChangeSizeElement,onChangeRotationElement,onFlipVElement,onFlipHElement, selectedElement}) => {
    const [stype, setStickerType] = useState("arts");
    const [selectedSticker, setSelectedSticker] = useState(null);
    const [number, setNumber] = useState(0);
    const [view, setView]= useState(null);
    const [size, setSize] = useState(selectedElement ? selectedElement.size : 25);
    const [rotation, setRotation] = useState(selectedElement ? selectedElement.rotation : 0);
    const [color, setColor]= useState("fill-[rgb(40,40,40)]");
    const [flipH, setFlipH] = useState(selectedElement ? selectedElement.flipH : false);
    const [flipV, setFlipV] = useState(selectedElement ? selectedElement.flipV : false);
    let onview;
    useEffect(() => {
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

    if(stype === "arts"){
        onview = <Arts setSelectedSticker={setSelectedSticker}/>
    }
    else{
        onview = <Mono setSelectedSticker={setSelectedSticker} setView={setView}/>
    }
  
    const handleClick = (e, name) => {
      setNumber(number + 1);
      if (name === "add") {
        if (selectedSticker){
        onSelectElement({
          name: selectedSticker + number,
          sticker: selectedSticker,
          type: stype,
          rotation: 0,
          view: view,
          size: 25,
          color: color,
          flipH: false,
          flipV: false,
          id: Date.now(),
        });}
        else{alert("Please Choose A Sticker")}
      }     
      if (name === "delete") {
        onDeleteElement();
      }
      if (name === "flipv") {
        handleflipV();
      }
      if (name === "fliph") {
        handleflipH();
      }
    };
    const handleType = (e) => {
        setNumber(number + 1);
        if (stype === "arts") {
            setStickerType('mono')
            setSelectedSticker(null)
        }     
        if (stype === "mono") {
            setStickerType('arts')
            setSelectedSticker(null)
        }}
    const handleColor = (e, color) => {
        setColor(color)
        if (selectedElement) {
          if (selectedElement.type === "mono") {
            onChangeColorElement(color);
          }
          else if (selectedElement.type === "arts") {
            alert("You can't Change Arts Color.");
          }
          else if (selectedElement.type === "text") {
            alert("Please move to texts tab to paint it.");
          }
        }
        else {
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
          const handleSup = () => {
            setSize((prevSize) => prevSize + 1);
            if (selectedElement) {
              onChangeSizeElement(size + 1);
            }
          };
          const handleSdown = () => {
            setSize((prevSize) => prevSize - 1);
            if (selectedElement) {
              onChangeSizeElement(size - 1);
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
        const handleRup = () => {
          setRotation((prevRotation) => prevRotation + 1);
          if (selectedElement) {
            onChangeRotationElement(rotation + 1);
          }
        };
        const handleRdown = () => {
          setRotation((prevRotation) => prevRotation - 1);
          if (selectedElement) {
            onChangeRotationElement(rotation - 1);
          }
        };
          

    return (
        <div className="flex flex-col justify-center w-full h-full overflow-hidden gap-0 md:gap-2 p-0.5 md:p-2">
        <div className="flex flex-row w-full h-[70%] overflow-hidden">
        <div className="flex flex-col w-[35%] md:w-1/2 h-full overflow-y-auto">
        <h1 className="text-center text-base md:text-2xl font-mono font-bold text-green-500">Stickers</h1>
        <div className="flex flex-col w-full h-full p-2 gap-0 overflow-y-scroll">
          {onview}
        </div>
        </div>
        <div className="flex flex-col w-[65%] md:w-1/2 h-full overflow-y-auto">
        <h1 className="text-center text-base md:text-2xl font-mono font-bold text-green-500">Properties</h1>
        <div className="flex flex-col justify-center w-full h-full gap-1 overflow-y-auto p-1">
        <div className="flex flex-row w-full h-1/3 gap-1  justify-start items-center">
        <p className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">size</p>
        <input
          className="w-1/4 h-full md:h-1/2 shadow appearance-none border p-1 text-sm text-center text-zinc-700 dark:text-zinc-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="size"
          value={size}
          onChange={handleSetSize}
        />
        <div className="flex flex-col gap-0 items center justify-center w-1/4 h-full">
        <EditorIconButton2
            onClick={handleSup}
            label="122.88,80.593 122.88,49.772 61.44,0 0,49.772 0,80.593 61.44,30.82 122.88,80.593"
            view="0 0 122.88 80.593"
            name="sup"
          />
        <EditorIconButton2
            onClick={handleSdown}
            label="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0"
            view="0 0 122.88 80.593"
            name="sdown"
          />
        </div>
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">rotate</h1>
        <input
          className="w-1/4 h-full md:h-1/2 shadow appearance-none border p-1 text-sm text-center text-zinc-700 dark:text-zinc-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="size"
          value={rotation}
          onChange={handleSetRotation}
        />
        <div className="flex flex-col gap-0 items center justify-center w-1/4 h-full">
        <EditorIconButton2
            onClick={handleRup}
            label="122.88,80.593 122.88,49.772 61.44,0 0,49.772 0,80.593 61.44,30.82 122.88,80.593"
            view="0 0 122.88 80.593"
            name="rup"
          />
        <EditorIconButton2
            onClick={handleRdown}
            label="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0"
            view="0 0 122.88 80.593"
            name="rdown"
          />
        </div>
        </div>
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">color</h1>
        <div className="grid grid-cols-8 w-full h-full md:h-1/4">
        {Colors.map((color, index) => (
          <button 
          onClick = {(e) => handleColor(e, color.fill)}
          className={`${color.back} w-full h-full`} key={index}>
          </button>
          ))}
        </div>
        </div>
        </div>
        </div>
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">Type Of Sticker</h1>
        <div className="grid grid-cols-2 justify-start items-center rounded-2xl border border-green-500 w-full overflow-hidden">
            <div>
            <input type="radio" onChange={handleType} id="mono" name="stickertype" value="mono" className="hidden peer"/>
            <label htmlFor="mono" className="flex p-1 w-full h-full justify-center cursor-pointer capitalize text-base md:text-2xl font-bold text-green-500 transition-all md:hover:bg-zinc-300 peer-checked:bg-green-500 dark:peer-checked:text-white peer-checked:text-zinc-700">
            Mono
            </label>
            </div>
            <div>
            <input type="radio" onChange={handleType} id="arts" name="stickertype" value="arts" className="hidden peer" defaultChecked/>
            <label htmlFor="arts" className="flex p-1 w-full h-full justify-center cursor-pointer capitalize text-base md:text-2xl font-bold text-green-500 transition-all md:hover:bg-zinc-300 peer-checked:bg-green-500 dark:peer-checked:text-white peer-checked:text-zinc-700">
            Arts
            </label>
            </div>
        </div>
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
  
  const arts = [
    "cock",
    "castelo",
    "letter",
    "colorbar",
  ];
  const Arts = (props) => {
    const {setSelectedSticker} = props;
  return (
    <>
    {arts.map((sticker, index) => (
    <div className="w-full h-full flex justify-center" key={index}>
    <input
    type="radio" onChange= {() => setSelectedSticker(sticker)} id={sticker} name="sticker" value="arts" className="hidden peer"/>
    <label htmlFor={sticker} className={`peer-checked:bg-green-500 border-b border-green-500 w-full h-full flex justify-center p-2`} key={index}>
    <img src={`/Assets/stickers/arts/${sticker}.png`} alt="sticker" className="w-2/3 h-auto"/>
    </label>
    </div>
    ))}
    </>
  )
}

  const monos = [
    {
        name: "colors",
        icon: "M0,103.78c11.7-8.38,30.46.62,37.83-14a16.66,16.66,0,0,0,.62-13.37,10.9,10.9,0,0,0-3.17-4.35,11.88,11.88,0,0,0-2.11-1.35c-9.63-4.78-19.67,1.91-25,10-4.9,7.43-7,16.71-8.18,23.07ZM54.09,43.42a54.31,54.31,0,0,1,15,18.06l50.19-49.16c3.17-3,5-5.53,2.3-10.13A6.5,6.5,0,0,0,117.41,0,7.09,7.09,0,0,0,112.8,1.6L54.09,43.42Zm-16.85,22c2.82,1.52,6.69,5.25,7.61,9.32L65.83,64c-3.78-7.54-8.61-14-15.23-18.58-6.9,9.27-5.5,11.17-13.36,20Z",
        label:"Colors",
        view:"0 0 122.88 103.78",
      },
      {
          name: "stickers",
          icon: "M0.661,59.444L60.454,0.6c0.442-0.436,1.03-0.633,1.605-0.595c0.85,0.033,1.695,0.084,2.535,0.151l0.078,0.003 c0.055,0.003,0.109,0.009,0.164,0.017c6.82,0.569,13.33,2.222,19.354,4.777c7.113,3.018,13.553,7.297,19.033,12.539 c11.736,11.229,18.121,26.082,18.92,41.208c0.797,15.081-3.955,30.442-14.486,42.77c-2.504,2.93-5.211,5.56-8.08,7.888 c-11.443,9.284-25.43,13.754-39.352,13.513c-13.921-0.241-27.78-5.193-38.968-14.752c-2.849-2.435-5.526-5.17-7.988-8.204 C8.838,94.455,5.333,88.23,3.042,81.47c-2.183-6.441-3.267-13.377-3.004-20.61C0.058,60.303,0.293,59.806,0.661,59.444 L0.661,59.444z M66.463,4.536c-0.262,3.008-0.646,5.908-1.15,8.7c25.385,1.998,45.361,23.228,45.361,49.125 c0,27.219-22.064,49.283-49.284,49.283c-26.059,0-47.392-20.225-49.163-45.833C9.646,66.185,7,66.433,4.297,66.559 c0.315,4.713,1.246,9.258,2.707,13.568c2.131,6.291,5.39,12.079,9.506,17.152c2.298,2.831,4.8,5.387,7.464,7.663 c10.43,8.912,23.346,13.528,36.315,13.753c12.971,0.226,25.998-3.937,36.65-12.58c2.674-2.168,5.199-4.623,7.541-7.362 c9.807-11.479,14.23-25.787,13.488-39.84c-0.746-14.104-6.695-27.948-17.627-38.409C95.23,15.614,89.217,11.62,82.568,8.8 C77.523,6.661,72.115,5.199,66.463,4.536L66.463,4.536z M4.181,62.385c16.298-0.775,30.345-6.292,40.563-16.489 c9.593-9.573,15.859-23.322,17.505-41.201L4.19,61.833C4.186,62.017,4.183,62.201,4.181,62.385L4.181,62.385z",
          label:"Stickers",
          view:"0 0 122.229 122.879",
        },
  ];

  const Mono = (props) => {
    const { setSelectedSticker, setView } = props;
  
    const handleClick = (e, view) => {
      setSelectedSticker(e.target.id);
      setView(view);
    };
  
    return (
      <>
        {monos.map((sticker, index) => (
          <div className="w-full h-full flex justify-center" key={index}>
            <input type="radio" onChange={(e) => handleClick(e, sticker.view)} id={sticker.icon} name="sticker" value="monos" className="hidden peer"/>
            <label
              htmlFor={sticker.icon} className={`peer-checked:bg-green-500 border-b border-green-500 w-full h-full flex justify-center p-2`}>
              <svg className="w-1/2 fill-zinc-700 dark:fill-white transition-all" xmlns="http://www.w3.org/2000/svg" viewBox={sticker.view}>
                <g>
                  <path d={sticker.icon} />
                </g>
              </svg>
            </label>
          </div>
        ))}
      </>
    );
  };
  

  const inspectors = [
    {
        label:"M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z",
        view:"0 0 122.875 122.648",
        name: "add",
    },
    {
      label:"m72.21 334.61 319.82 150.95V334.61H72.21zm-56.56-94.06c-18.2 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h19.23c18.2 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45H15.65zm82.14 0c-18.2 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h31.46c18.19 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45H97.79zm94.37 0c-18.2 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h31.45c18.2 0 21.92-26.27 3.74-31.01-1.28-.28-2.39-.45-3.74-.45h-31.45zm94.37 0c-18.2 0-21.92 26.27-3.74 31.01 1.28.28 2.39.45 3.74.45h31.45c18.2 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45h-31.45zm94.36 0c-18.19 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h31.46c18.2 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45h-31.46zM21.02 178.98 397.41 1.33c1.51-.85 3.25-1.33 5.1-1.33C408.3 0 413 4.7 413 10.49v177.96c0 5.79-4.7 10.48-10.49 10.48H25.49c-3.92-.03-7.68-2.25-9.47-6.03-2.46-5.22-.22-11.46 5-13.92zm377.03 332.56L21.69 333.9c-3.91-1.53-6.69-5.33-6.69-9.78 0-5.79 4.7-10.48 10.49-10.48h377.02c5.79 0 10.49 4.69 10.49 10.48v177.95c-.02 1.5-.35 3.02-1.03 4.47-2.46 5.22-8.7 7.46-13.92 5z",
      view:"0 0 428 512.54",
      name: "flipv",
    },
    {
    label:"M333.55 16.79 511 392.75c2.46 5.22.22 11.45-4.99 13.91-1.45.68-2.97 1.01-4.46 1l-177.77.03c-5.78 0-10.47-4.7-10.47-10.48V20.58c0-5.78 4.69-10.47 10.47-10.47 4.44 0 8.25 2.77 9.77 6.68zM240.3 402.16c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-9.45c0-18.18-26.25-21.89-30.98-3.74-.28 1.29-.45 2.4-.45 3.74v9.45zm0-72.3c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-31.42c0-18.18-26.25-21.89-30.98-3.74-.28 1.29-.45 2.4-.45 3.74v31.42zm0-94.27c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-31.42c0-18.18-26.25-21.89-30.98-3.73-.28 1.28-.45 2.39-.45 3.73v31.42zm0-94.26c0 18.17 26.25 21.88 30.98 3.73.28-1.28.45-2.39.45-3.73V109.9c0-18.17-26.25-21.89-30.98-3.73-.28 1.28-.45 2.39-.45 3.73v31.43zm0-94.27c0 18.17 26.25 21.89 30.98 3.73.28-1.28.45-2.39.45-3.73V15.63c0-18.17-26.25-21.88-30.98-3.73-.28 1.29-.45 2.39-.45 3.73v31.43zM1.33 392.11 178.79 16.12c2.46-5.21 8.7-7.45 13.91-4.99 3.78 1.78 5.99 5.54 5.99 9.45l.04 376.63c0 5.78-4.7 10.48-10.48 10.48H10.48c-5.79 0-10.48-4.7-10.48-10.48 0-1.85.48-3.59 1.33-5.1zm483.72-5.37L334.26 67.26v319.48h150.79z",
    view:"0 0 512 417.79",
    name: "fliph",
    },
    {
        label:"M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z",
        view:"0 0 109.484 122.88",
        name: "delete",
    },
    
  ];