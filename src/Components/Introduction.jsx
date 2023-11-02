import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./UI/UserInterface";

export const Introduction = (props) => {
  const { setPage} = props;
  return (
    <div className="flex flex-col md:flex-row gap-20 h-full w-full px-4 pt-20 -mb-20 md:mb-0 md:py-20 justify-center">
    <motion.div className="w-full md:w-1/2 h-full text-left mt-0 md:mt-24"
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
      <h3 className="capitalize text-green-600 text-2xl md:text-6xl font-extrabold">wear your favorite colors.</h3>
      <p className="mt-4 text-slate-200 text-sm md:text-xl font-bold">Discover a world of endless possibilities with our one-of-a-kind customization experience. At Castelo, we believe that self-expression starts from the ground up – or in this case, from your feet! Unleash your creativity and design shoes and stickers that are as unique as you are.</p>
      <div className="flex flex-row">
        <PrimaryButton label="Get Started" onClick={()=>setPage("Customize Now")}/>
        <div className="mx-4 md:mx-8">
        <SecondaryButton label="Guide Me" onClick={()=>setMenuOpened(false)}/>
        </div>
      </div>
    </motion.div>
    <motion.div className="w-full md:w-1/2 p-4 bg-white rounded-full flex"
    >
    <img src={"/Assets/textures/shoes.png"} alt="Shoes"/>
    </motion.div>
    </div>
  )
}