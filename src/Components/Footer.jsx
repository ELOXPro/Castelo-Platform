import { FooterButton, PrimaryButton} from "./UI/UserInterface"
import { useState } from "react";

export const Footer = (props) => {
    const {setPage} = props;
    const [loading, setLoading] = useState(false);
    const handleClick = (e) => {
        let pagename = e.target.textContent;
        e.preventDefault();
        setPage(pagename);
      }

  return (
    <div className='w-full h-full bg-gradient-to-bl from-zinc-300 via-zinc-200 to-zinc-100 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700 px-2 md:px-10'>
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-8 gap-8 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-8">
        <div className="flex flex-row items-center font-bold text-xl gap-2">
          <img src={"/Assets/misc/logo.png"} alt="logo" className="h-10 w-auto"/>
          <h3 className="text-zinc-900">Platform</h3>
        </div>
        <p className="text-zinc-500 dark:text-zinc-200 text-sm md:text-base font-bold">The customer is at the heart of our unique business model, which includes design.</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <FooterButton label="Home" onClick={handleClick}/>
          <FooterButton label="News" onClick={handleClick}/>
          <FooterButton label="In The Store" onClick={handleClick}/>
          <FooterButton label="Customize Now" onClick={handleClick}/>
        </div>
        <div className="flex flex-col gap-2 ">
        <div className="flex flex-row items-center font-bold text-xl gap-2">
          <h3 className="capitalize text-zinc-600 dark:text-zinc-100">subscribe to our newsletter.</h3>
        </div>
        <p className="text-zinc-500 dark:text-zinc-200 text-sm md:text-base font-bold">Be the first to know about new arrivals, look books, sales & promos!</p>
        <div className="flex flex-row gap-2 h-auto justify-center items-center">
        <input
              className="w-full h-12 shadow appearance-none border rounded py-2 px-3 text-zinc-500 dark:text-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              type="email"

              name="email"
              placeholder="Enter your email address"
            />
        <PrimaryButton label={loading ? "Subscribing" : "Subscribe"}/>
        </div>
        </div>
        </div>
        <div className='flex w-full h-auto p-0 py-4 md:p-4 items-center justify-center border-t border-zinc-400 '>
            <h3 className="text-zinc-600 dark:text-zinc-300 font-mono font-bold">Copyright © 2023-2025 Castelo Platform All Rights Reserved | This Website was Developed By <a href="https://eloxpro.netlify.app" className="text-blue-500 md:hover:text-blue-600 animate-pulse">ELOXPro</a></h3>
        </div>
    </div>
  )
}
