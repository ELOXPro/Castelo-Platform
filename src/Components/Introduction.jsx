import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./UI/UserInterface";

export const Introduction = (props) => {
  const { setPage} = props;
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 h-full w-full  justify-end items-center bg-gradient-to-l from-white via-zinc-400 to-white  dark:from-zinc-700 dark:via-zinc-400 dark:to-zinc-700">
    <motion.div className="py-10 md:py-40 w-full md:w-1/3 text-left px-10"
      initial={{
        opacity: 0,
        y:50,
      }}
      whileInView={{
        opacity: 1,
        y:0,
        transition:{
          duration: 1,
          delay: 0.6,
        }
      }}
    >
      <h3 className="capitalize text-green-500 text-2xl md:text-3xl font-extrabold">wear your favorite colors.</h3>
      <p className="mt-4 dark:text-zinc-200 text-zinc-500 text-sm md:text-base font-bold">Discover a world of endless possibilities with our one-of-a-kind customization experience. At Castelo, we believe that self-expression starts from your looks! Unleash your creativity and design your styles that are as unique as you are.</p>
      <div className="flex flex-row gap-4">
        <PrimaryButton label="Get Started" onClick={()=>setPage("Customize Now")}/>
        <SecondaryButton label="Check The Store" onClick={()=>setPage("In The Store")}/>
      </div>
    </motion.div>
    <motion.div className="w-full md:w-2/3 p-2"
    >
    <img src={"/Assets/misc/logo.png"} alt="sample"/>
    </motion.div>
    </div>
  )
}