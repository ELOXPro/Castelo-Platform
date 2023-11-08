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
    <div className={`w-full ${index > 0 ? "border-l": ""} ${index > 1 ? "border-t": ""} border-green-700`}>
            <input type="radio" onChange={handleChange} id={type} name={name} value={type} className="hidden peer"/>
            <label htmlFor={type} className="flex p-4 md:p-2 justify-center w-full cursor-pointer capitalize text-2xl font-bold text-green-500 transition-all md:hover:bg-zinc-300 peer-checked:bg-green-700 dark:peer-checked:text-white peer-checked:text-zinc-700">
            {type}
            </label>
    </div>
  );
};