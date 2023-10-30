export const Menu = (props) => {
    const {menuOpened, setMenuOpened, setPage} = props;
    return (
      <>
      <button 
        onClick ={()=> setMenuOpened(!menuOpened)}
        className="z-20 fixed top-6 right-6 p-3 hover:bg-green-500 bg-green-700 w-11 h-11 rounded-full transition-colors visible md:invisible">
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""}`}/>
      </button>
      <div className={`z-10 fixed top-0 left-0 w-screen overflow-hidden bg-gray-500 transition-all flex flex-col md:flex-row items-center justify-center md:justify-end px-6
        ${menuOpened ? "h-full md:h-16" : "h-0"} bg-opacity-90 md:bg-opacity-30`}>
        <div className=" absolute z-20 top-6 md:top-2 left-2 flex flex-row items-center font-bold text-2xl gap-2">
          <img src={"/Assets/misc/logo.png"} alt="logo" className="h-12 w-auto"/>
          <h3 className="text-zinc-900">Platform</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:justify-start">
          <MenuButton label="Home" onClick={()=>setPage('Home')}/>
          <MenuButton label="Presets" onClick={()=>setPage('Presets')}/>
          <MenuButton label="How It Works" onClick={()=>setPage('Guide')}/>
          <PrimaryButton label="Customize Now" onClick={()=>setPage('Editor')}/>
        </div>
        </div>
      </>
    )
  }
  
  const MenuButton = (props) => {
    const {label, onClick} = props;
    return (
      <button
        onClick ={onClick}
        className="text-2xl md:text-base font-bold cursor-pointer hover:text-green-800 text-green-500 transition-colors mr-0 md:mr-4">
        {label}
      </button>
    );
  };

  const PrimaryButton = (props) => {
    const {label, onClick} = props;
    return (
      <button
        onClick ={onClick}
        className="w-52 md:w-36 text-xl md:text-sm bg-green-800 hover:bg-green-500 rounded-md font-bold cursor-pointer hover:text-green-800 text-green-500 transition-colors my-4 p-4 md:p-2">
        {label}
      </button>
    );
  };