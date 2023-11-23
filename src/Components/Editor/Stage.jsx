import { useEffect, useState } from "react";
import { AbsoluteButton } from "../UI/UserInterface";
import { ColorPicker } from "./ColorPicker";
import { EditorMenu } from "./EditorMenu";
import { Draggable } from "./Draggable";
import { StickerPicker } from "./StickerPicker";
import { TextAdder } from "./TextAdder";
import { ImageUploader } from "./ImageUploader";

export const Stage = (props) => {
  const {item,setPage} = props;
  const [color, setColor] = useState("bg-white");
  const [elements, setElements] = useState([])
  const [editmode, setEditmode] = useState(false);
  const [editor, setEditor] = useState("color")
  const [selectedElement, setSelectedElement] = useState(null);
  let onstage;
  let oneditor;

  useEffect(() => {
    if (selectedElement && selectedElement.type === "text") {
      setEditor("text");
    } else if (selectedElement && (selectedElement.type === "arts" || selectedElement.type === "mono")) {
      setEditor("sticker");
    }
  }, [selectedElement]);


  const onSelectElement = (newElement) => {
    if (newElement) {
      setElements((prevElements) => [...prevElements, newElement]);
    } else {
      setSelectedElement(null);
    }
  };
  const onDeleteElement = () => {
    if (selectedElement) {
      const updatedElements = elements.filter((el) => el.id !== selectedElement.id);
      setElements(updatedElements);
    }
    else {alert("Please Select an item to Delete (Edit Mode)")}
  };
  const onChangeText = (newText) => {
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, text: newText } : el
      );
      setElements(updatedElements);
    }};
  const onChangeFont = (newText) => {
      if (selectedElement) {
        const updatedElements = elements.map((el) =>
          el.id === selectedElement.id ? { ...el, font: newText } : el
        );
        setElements(updatedElements);
      }};

  const onChangeColorElement = (newColor) => {
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, color: newColor } : el
      );
      setElements(updatedElements);
    }};
  const onChangeSizeElement = (newSize) => {
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, size: newSize } : el
      );
      setElements(updatedElements);
    }};
  const onChangeRotationElement = (newRotation) => {
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, rotation: newRotation } : el
      );
      setElements(updatedElements);
    }};
  const onFlipVElement = (newVal) => {
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, flipV: newVal } : el
      );
      setElements(updatedElements);
    }};
  const onFlipHElement = (newVal) => {
    if (selectedElement) {
      const updatedElements = elements.map((el) =>
        el.id === selectedElement.id ? { ...el, flipH: newVal } : el
      );
      setElements(updatedElements);
    }};

 if(item === "T-Shirt"){
   onstage = <Tshirt color={color} editmode={editmode} setEditmode={setEditmode} selectedElement={selectedElement} setSelectedElement={setSelectedElement} elements={elements}/>
 }
 if(item === "Jumper"){
  onstage = <Jumper color={color} editmode={editmode} setEditmode={setEditmode} selectedElement={selectedElement} setSelectedElement={setSelectedElement} elements={elements}/>
 }

 if(editor === "color"){
  oneditor = <ColorPicker setColor={setColor}/>
 }
 if(editor === "sticker"){
  oneditor = <StickerPicker onSelectElement={onSelectElement} onDeleteElement={onDeleteElement} onChangeColorElement={onChangeColorElement} onChangeSizeElement={onChangeSizeElement} onChangeRotationElement={onChangeRotationElement} onFlipVElement={onFlipVElement} onFlipHElement={onFlipHElement} color={color} selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
 }
 if(editor === "text"){
  oneditor = <TextAdder onSelectElement={onSelectElement} onDeleteElement={onDeleteElement} onChangeColorElement={onChangeColorElement} onChangeText={onChangeText} onChangeFont={onChangeFont} onChangeSizeElement={onChangeSizeElement} onChangeRotationElement={onChangeRotationElement} onFlipVElement={onFlipVElement} onFlipHElement={onFlipHElement} color={color} selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
 }
 if(editor === "image"){
  oneditor = <ImageUploader onSelectElement={onSelectElement} onDeleteElement={onDeleteElement} onChangeSizeElement={onChangeSizeElement} onChangeRotationElement={onChangeRotationElement} onFlipVElement={onFlipVElement} onFlipHElement={onFlipHElement} selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
 }

  return (
  <div className="absolute z-30 w-full h-full bg-gradient-to-l from-white via-zinc-300 to-zinc-300 dark:from-zinc-700 dark:to-zinc-900 dark:via-zinc-500 overflow-hidden flex flex-col md:flex-row gap-0 md:gap-2"> 
  <AbsoluteButton
      onClick={() => setPage("Home")}
      label="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
  />
  <div className="flex flex-col justify-start w-full md:w-1/2 h-1/2 md:h-full">
  <div className="hidden md:flex justify-center w-full">
  <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">Castelo Customizer</h3>
  </div>
  <div className="flex justify-start items-start w-full h-full p-0 md:p-2">
    {onstage}
  </div>
  </div>
  <div className="flex flex-col justify-start w-full md:w-1/2 h-1/2 md:h-full p-0 md:p-2">
  <div className="flex justify-center items-center w-full h-1/4">
    <EditorMenu setEditor={setEditor} editor={editor}/>
  </div>
  <div className="flex justify-start items-center w-full h-3/4">
    {oneditor}
  </div>
  </div>
  </div>
  )
}

const Tshirt = (props) => {
  const { color, editmode, setEditmode, elements, selectedElement, setSelectedElement} = props;
  const handledit = (e) => {
    e.preventDefault();
    setEditmode(!editmode);
    setSelectedElement(null);
  };
  


  return (
    <div className="absolute z-30 w-full md:w-1/2 h-1/2 md:h-[90%] md:rounded-lg overflow-hidden border-4 border-green-500 select-none">
      <div className={`absolute w-full h-full ${color} mix-blend-multiply select-none`}/>
      <div className={`absolute top-[26%] left-[33.5%] w-[32%] h-[56.2%] ${editmode?"z-35 border":""} border-white overflow-hidden select-none`}>
      {elements.map((el) => (
          <Draggable
            key={el.id}
            name={el.name}
            type={el.type}
            text ={el.text}
            font={el.font}
            view={el.view}
            size={el.size}
            rotation={el.rotation}
            color={el.color}
            flipH={el.flipH}
            flipV={el.flipV}
            sticker={el.sticker}
            selected={selectedElement && selectedElement.id === el.id}
            setSelected={() => setSelectedElement(el)}
            editmode={editmode}
          />
        ))}
      </div>
      <img src="/Assets/textures/TShirt/overlay.png" alt="T-Shirt" className="absolute w-full h-full mix-blend-multiply select-none"/>
      <img src="/Assets/textures/TShirt/background.png" alt="T-Shirt" className="absolute w-full h-full select-none"/>
      <img src="/Assets/textures/TShirt/hanger.png" alt="T-Shirt" className="absolute w-full h-full select-none"/>
      <div className={`absolute w-full h-full bg-black ${editmode?"opacity-50":"opacity-0"}`}/>
      <button onClick={handledit} 
      className="absolute text-base p-2 w-auto h-auto text-black md:hover:text-white 
      font-mono font-bold shadow-lg shadow-black md:hover:shadow-white bg-green-500 
      rounded-full m-1 md:m-2 transition-all select-none"
      >{editmode ? "Edit Mode":"View Mode"}</button>
    </div>
  )
}

const Jumper = (props) => {
  const { color, editmode, setEditmode, elements, selectedElement, setSelectedElement} = props;
  const handledit = (e) => {
    e.preventDefault();
    setEditmode(!editmode);
    setSelectedElement(null);
  };

  return (
    <div className="absolute z-30 w-full md:w-1/2 h-1/2 md:h-[90%] md:rounded-lg overflow-hidden border-4 border-green-500">
      <img src="/Assets/textures/Jumper/hoodie.png" alt="Jumper" className="absolute w-full h-full"/>
      <div className={`absolute w-full h-full ${color} mix-blend-multiply`}/>
      <div className={`absolute top-[36.9%] left-[31.2%] w-[38%] h-[46%] ${editmode?"z-35 border":""} border-white overflow-hidden select-none`}>
      {elements.map((el) => (
          <Draggable
            key={el.id}
            name={el.name}
            type={el.type}
            text ={el.text}
            font={el.font}
            view={el.view}
            size={el.size}
            rotation={el.rotation}
            color={el.color}
            flipH={el.flipH}
            flipV={el.flipV}
            sticker={el.sticker}
            selected={selectedElement && selectedElement.id === el.id}
            setSelected={() => setSelectedElement(el)}
            editmode={editmode}
          />
        ))}
      </div>
      <img src="/Assets/textures/Jumper/laceshadow.png" alt="Jumper" className="absolute w-full h-full mix-blend-multiply"/>
      <img src="/Assets/textures/Jumper/laces.png" alt="Jumper" className="absolute w-full h-full"/>
      <img src="/Assets/textures/Jumper/overlay.png" alt="Jumper" className="absolute w-full h-full mix-blend-multiply"/>
      <img src="/Assets/textures/Jumper/background.png" alt="Jumper" className="absolute w-full h-full "/>
      <div className={`absolute w-full h-full bg-black ${editmode?"opacity-50":"opacity-0"}`}/>
      <button onClick={handledit} 
      className="absolute text-base p-2 w-auto h-auto text-black md:hover:text-white 
      font-mono font-bold shadow-lg shadow-black md:hover:shadow-white bg-green-500 
      rounded-full m-1 md:m-2 transition-all select-none"
      >{editmode ? "Edit Mode":"View Mode"}</button>
    </div>
  )
}
