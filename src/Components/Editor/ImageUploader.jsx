import { useEffect, useState } from "react";
import { EditorIconButton, EditorIconButton2, PrimaryButton } from "../UI/EditorInterface";
import { Colors } from "./ColorPicker";

export const ImageUploader = ({ onSelectElement, onDeleteElement, onChangeSizeElement,onChangeRotationElement, onFlipVElement,onFlipHElement, selectedElement}) => {
    const [number, setNumber] = useState(0);
    const [image, setImage] = useState(null);
    const [size, setSize] = useState(selectedElement ? selectedElement.size : 25);
    const [rotation, setRotation] = useState(selectedElement ? selectedElement.rotation : 0);
    const [flipH, setFlipH] = useState(selectedElement ? selectedElement.flipH : false);
    const [flipV, setFlipV] = useState(selectedElement ? selectedElement.flipV : false);
		const [uploadedImages, setUploadedImages] = useState([]);

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
  
    const handleClick = (e, name) => {
			setNumber(number + 1);
			if (name === "add") {
				if (image) {
					onSelectElement({
						name: "Upload" + number,
						type: "image",
						image: image,
						rotation: rotation,
						size: size,
						flipH: flipH,
						flipV: flipV,
						id: Date.now(),
					});
				} else {
					alert("Please Choose An Image");
				}
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
			if (name === "Upload") {
        if (image) {
					const newImageElement = {
						name: image,
						type: "image",
						rotation: rotation,
						size: size,
						flipH: flipH,
						flipV: flipV,
						id: Date.now(),
					};
				}
				onSelectElement(newImageElement);
				setUploadedImages((prevImages) => [...prevImages, newImageElement]);
      }
    };
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
      const handleImageChange = (e) => {
				const file = e.target.files[0];
		
				if (file) {
					const reader = new FileReader();
		
					reader.onload = (event) => {
						const imageDataUrl = event.target.result;
						setImage(imageDataUrl);
					};
		
					reader.readAsDataURL(file);
				}
			};
    return (
        <div className="flex flex-col justify-center w-full h-full overflow-hidden gap-0 md:gap-2 p-0.5 md:p-2">
        <div className="flex flex-row w-full h-[70%] overflow-hidden">
        <div className="flex flex-col w-1/3 md:w-1/2 h-full overflow-y-auto">
        <h1 className="text-center text-base md:text-2xl font-mono font-bold text-green-500">Uploads</h1>
        <div className="flex flex-col w-full h-full p-2 gap-0 overflow-y-scroll">
          {uploadedImages.map((uploadedImage, index) => (
            <img
              key={index}
              src={uploadedImage.name} // Assuming that 'name' contains the image URL
              alt={`uploaded-${index}`}
              className="w-full h-auto mb-2"
            />
          ))}
        </div>
        </div>
        <div className="flex flex-col w-2/3 md:w-1/2 h-full overflow-y-auto">
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
        <h1 className="text-left text-sm md:text-lg font-mono font-bold text-zinc-700 dark:text-white ">Upload</h1>
        <input type="file" onChange={handleImageChange} accept="image/*" />
				<PrimaryButton label="Upload" ononClick={(e) => handleClick(e, label)} />
        </div>
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