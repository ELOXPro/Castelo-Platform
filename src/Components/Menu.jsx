import { MenuButton, PrimaryButton, SecondaryMenuButton } from "./UI/UserInterface";

export const Menu = (props) => {
    const {menuOpened, setMenuOpened, setPage} = props;
    const handleClick = (e) => {
      let pagename = e.target.textContent;
      e.preventDefault();
      setPage(pagename);
      setMenuOpened(false);
    }
    

    return (
      <>
      <button 
        onClick ={()=> setMenuOpened(!menuOpened)}
        className="z-20 fixed top-6 right-6 p-3 bg-green-900 w-11 h-11 rounded-full transition-colors visible md:invisible">
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""}`}/>
      </button>
      <div className={`z-10 fixed top-0 left-0 w-full overflow-hidden bg-gray-500 transition-all flex flex-col items-center justify-center px-6
        ${menuOpened ? "h-full" : "h-0"} bg-opacity-90`}>
        <div className=" absolute z-20 top-6 left-2 flex flex-row items-center font-bold text-2xl gap-2">
          <img src={"/Assets/misc/logo.png"} alt="logo" className="h-12 w-auto"/>
          <h3 className="text-zinc-900">Platform</h3>
        </div>
        <div className="flex flex-col gap-6">
          <MenuButton label="Home" onClick={handleClick}/>
          <MenuButton label="In The Store" onClick={handleClick}/>
          <MenuButton label="How It Works" onClick={handleClick}/>
          <SecondaryMenuButton label="Customize Now" onClick={handleClick}/>
        </div>
        </div>
        <div className="invisible md:visible z-10 fixed top-0 left-0 w-full overflow-hidden bg-gray-500 transition-all flex flex-row items-center justify-end px-6 h-16 bg-opacity-30">
        <div className=" absolute z-20 top-2 left-2 flex flex-row items-center font-bold text-2xl gap-2">
          <img src={"/Assets/misc/logo.png"} alt="logo" className="h-12 w-auto"/>
          <h3 className="text-zinc-900">Platform</h3>
        </div>
        <div className="flex flex-row gap-4 justify-start">
          <MenuButton label="Home" onClick={handleClick}/>
          <MenuButton label="In The Store" onClick={handleClick}/>
          <MenuButton label="How It Works" onClick={handleClick}/>
          <SecondaryMenuButton label="Customize Now" onClick={handleClick}/>
        </div>
        </div>
      </>
    )
  }
  
  