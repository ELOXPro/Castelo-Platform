import React from 'react'
import { motion } from 'framer-motion'

export const Features = () => {
  return (
    <div className="flex flex-col py-10 md:py-20 w-full h-full gap-4 px-2 md:px-4">
      <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">Features</h3>
      <h3 className="capitalize text-zinc-400 text-base md:text-xl font-bold">Here are the arts we will give you to customize your shoes.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
        {features.map((feature, index) => (
          <Card image={feature.image} caption={feature.caption} feature={feature.feature} key={index}/>))}
      </div>
    </div>
  )
}
const Card = (props) => {
    const {image, caption, feature} = props;
    return (
      <motion.div className=" flex flex-col md:flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 rounded-lg shadow-lg p-2 w-full h-full gap-2"
      initial={{
        opacity: 0,
        y:50,
      }}
      whileInView={{
        opacity: 1,
        y:0,
        transition:{
          duration: 1,
          delay: 0.2,
        }
      }}
      >
        <img src={image} alt="Castelo features" className="w-full md:w-1/2 rounded-lg"/>
        <div className="flex flex-col justify-center items-center gap-2">
            <h3 className=" font-mono font-bold text-3xl text-green-400">{feature}</h3>
            <h3 className="capitalize text-white text-base font-bold text-left px-4">{caption}</h3>
        </div>
      </motion.div>
    );
  };

const features = [
  {
    image: "Assets/textures/shoes.png",
    caption: "we provide you with a variety colors that can be painted on any any part of your shoe and feel free to choose your own design. here you are the only one to limit yourself ",
    feature: "Colors",
  },
  {
    image: "Assets/textures/shoes.png",
    caption: "Customize your Shoes, there are three choices to choose from colors, patterns and stickers. Colors won't affect the price but patterns and stickers will Affect the price.",
    feature: "Patterns",
  },
  {
    image: "Assets/textures/shoes.png",
    caption: "Done?, first check you happy with it? if yes then the next step it's to enter your information and pay the specified price then wait for 3 Days then there you go.",
    feature: "Stickers",
  },
];