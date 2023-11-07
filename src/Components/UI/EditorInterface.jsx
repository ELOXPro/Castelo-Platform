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

  export const ShoeData = (props) => {
    const {setStep, setCastData} = props;

    const handleClick = (e) => {
        let choice = caption;
        e.preventDefault();
        setItem(choice);
        setStep(2);
      }
    return (
      <div className="flex flex-col justify-start items-center bg-white dark:bg-zinc-700 w-full h-full gap-4 overflow-hidden">
        <h3 className="capitalize text-zinc-500 dark:text-zinc-200 text-xl font-bold text-center px-4">enter the information</h3>
      </div>
    );
  };

  export const ClothesData = (props) => {
    const {setStep, setCastData} = props;

    const handleClick = (e) => {
        let choice = caption;
        e.preventDefault();
        setItem(choice);
        setStep(2);
      }
    return (
      <div className="flex flex-col justify-start items-center bg-white dark:bg-zinc-700 w-full h-full gap-4 overflow-hidden">
        <h3 className="capitalize text-green-500 text-2xl font-bold text-center">Pick What You Prefer</h3>
        <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Enter The Preferred Quality According to your Budget.</h3>
        <div className="flex flex-row justify-start items-center rounded-xl border border-green-500 w-full overflow-hidden">
          <button className="text-2xl font-bold text-green-500 p-4 w-1/2 md:hover:bg-green-100 transition-all">Standard</button>
          <button className="border-l border-green-500 text-2xl font-bold text-green-500 p-4 w-1/2 md:hover:bg-green-700 transition-all">Premium</button>
        </div>
      </div>
    );
  };