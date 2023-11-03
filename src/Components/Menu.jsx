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
        className="z-30 fixed top-2 right-2 p-2 bg-green-500 w-11 h-11 rounded-md transition-colors visible md:invisible">
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md w-3/4 my-1 ${menuOpened ? "hidden" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md transition-all ${menuOpened ? "-rotate-45 w-full" : "w-1/2"}`}/>
      </button>
      <div className={`z-20 fixed top-0 left-0 w-full overflow-hidden bg-white  transition-all flex flex-col items-center justify-center px-6
        ${menuOpened ? "h-full" : "h-16"}`}>
        <div className=" fixed z-20 top-2 left-2 flex flex-row items-center font-bold text-2xl gap-2">
          <img src={"/Assets/misc/logo.png"} alt="logo" className="h-12 w-auto"/>
          <h3 className="text-zinc-900">Platform</h3>
        </div>
        <div className={`flex flex-col gap-6 ${menuOpened ? "" : "hidden"}`}>
          <MenuButton label="Home" onClick={handleClick}/>
          <MenuButton label="In The Store" onClick={handleClick}/>
          <MenuButton label="How It Works" onClick={handleClick}/>
          <SecondaryMenuButton label="Customize Now" onClick={handleClick}/>
        </div>
        </div>
        <div className="invisible md:visible z-20 fixed top-0 left-0 w-full overflow-hidden bg-white transition-all flex flex-row items-center justify-end px-6 h-16 bg-opacity-30">
        <div className=" fixed z-20 top-2 left-2 flex flex-row items-center font-bold text-2xl gap-2">
        </div>
        <div className="flex flex-row gap-4 justify-start">
          <MenuButton label="Home" onClick={handleClick}/>
          <MenuButton label="In The Store" onClick={handleClick}/>
          <MenuButton label="News" onClick={handleClick}/>
          <MenuButton label="Cart" onClick={handleClick}/>
          <SecondaryMenuButton label="Customize Now" onClick={handleClick}/>
        </div>
        </div>
      </>
    )
  }
  
  