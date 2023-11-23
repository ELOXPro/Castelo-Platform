export const ShoeTexture = (props) => {
    const { type, part, x, y, w, h } = props;
  
    return (
        <img src={`./Assets/textures/${type}/${part}-color.png`} alt="Castelo" className={`absolute z-10 ${w} ${h} ${y} ${x} mix-blend-multiply`} />
    );
};
  
export const ChoiceCard = (props) => {
    const {image, caption, setItem, setStep} = props;

    const handleClick = (e) => {
        let choice = caption;
        e.preventDefault();
        setItem(choice);
        setStep(2);
      }
    return (
      <button onClick={handleClick} className="flex flex-row md:flex-col justify-start items-center bg-white dark:bg-zinc-700 rounded-lg shadow-lg dark:shadow-white shadow-zinc-500 w-full md:w-2/3 h-1/3 md:h-3/4 gap-2 overflow-hidden md:hover:bg-green-500 transition-all">
        <img src={image} alt="Castelo features" className="w-1/2 h-full md:h-full md:hover:h-5/6 md:w-full transition-all"/>
        <h3 className="capitalize text-zinc-500 dark:text-zinc-200 text-xl font-bold text-center px-4">{caption}</h3>
      </button>
    );
};

export const ChoiceRadio = (props) => {
  const {type, name, index, setCastData, castdata} = props;

  const handleChange = (e) => {
      setCastData({
        ...castdata,
        [e.target.name] : e.target.value,
      });
    }
  return (
    <div className={`w-full ${index > 0 ? "border-l": ""} ${index > 1 ? "border-t": ""} border-green-500`}>
            <input type="radio" onChange={handleChange} id={type} name={name} value={type} className="hidden peer"/>
            <label htmlFor={type} className="flex p-2 justify-center w-full cursor-pointer capitalize text-2xl font-bold text-green-500 transition-all md:hover:bg-zinc-300 peer-checked:bg-green-500 dark:peer-checked:text-white peer-checked:text-zinc-700">
            {type}
            </label>
    </div>
  );
};

export const EditorRadio = (props) => {
  const { type, icon, label, view, setEditor, index } = props;

  const handleChange = () => {
    setEditor(type);
  };

  return (
    <div className={`w-full h-full ${index > 0 ? "border-l": ""} border-green-500`}>
      <input type="radio" onChange={handleChange} id={type} name="editor" value={type} className="hidden peer" checked={props.checked}/>
      <label htmlFor={type} className="flex justify-center items-center w-full h-full cursor-pointer flex-row  dark:bg-zinc-700 bg-white peer-checked:bg-green-500 p-2 gap-2 text-base font-bold text-zinc-700 dark:text-white transition-all">
      <svg className="w-8 fill-zinc-700 dark:fill-white transition-all " xmlns="http://www.w3.org/2000/svg" viewBox={view}>
      <g>
      <path  d={icon}/>
      </g>
      </svg>
      <p className="hidden md:block">{label}</p>
      </label>
    </div>
  );
};

export const EditorIconButton = (props) => {
  const {label, view, index, name} = props;
  
return (
  <button
    onClick ={() => props.onClick(props.name)}
    className={`p-1 w-full h-8 md:h-10 ${index > 0 ? "border-l": ""} border-green-500 md:hover:bg-zinc-500`}>
    <svg id={name} className="w-full h-full dark:fill-white fill-zinc-700 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox={view}>
    <g>
      <path d={label}/>
    </g>
    </svg>
  </button>
);
}

export const EditorIconButton2 = (props) => {
  const {label, view, index, name} = props;
  
return (
  <button
    onClick ={() => props.onClick(props.name)}
    className={`p-1 w-full h-8 md:h-10 ${index > 0 ? "border-l": ""} border-green-500 md:hover:bg-zinc-500`}>
    <svg id={name} className="w-full h-full dark:fill-white fill-zinc-700 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox={view}>
    <g>
      <polygon points={label}/>
    </g>
    </svg>
  </button>
);
}

export const PrimaryButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-auto text-sm md:text-base bg-green-500 rounded-md font-bold cursor-pointer text-white dark:text-zinc-700 transition-all p-2 shadow-lg shadow-zinc-400 md:hover:shadow-zinc-700 dark:md:hover:shadow-white md:hover:text-zinc-700 md:hover:dark:text-white">
    {label}
  </button>
);
}