import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className="flex flex-col gap-8 py-10 w-full h-full bg-white px-2 md:px-4">
      <h3 className="capitalize text-green-600 text-2xl md:text-4xl font-extrabold">how does this works ?</h3>
      <h3 className="capitalize text-zinc-500 text-base md:text-xl font-bold">it's super easy just follow these steps.</h3>
      <div className="grid grid-cols-1 gap-4 w-full h-full">
        {steps.map((step, index) => (
          <Card video={step.video} caption={step.caption} step={step.step} key={index}/>))}
      </div>
      <h3 className="capitalize text-zinc-500 text-base md:text-xl font-bold">if you face any problem before or after purchase be sure to check our contact page.</h3>
    </div>
  )
}
const Card = (props) => {
    const {video, caption, step} = props;
    return (
      <motion.div className=" flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-2 w-full h-full gap-4"
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
        <video autoPlay muted loop className="w-full md:w-1/4 rounded-lg">
        <source src={video} type="video/mp4" />
      </video>
        <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="w-24 h-24 font-mono text-6xl text-white bg-green-700 p-4 rounded-full">{step}</h3>
            <h3 className="capitalize text-zinc-500 text-base font-bold text-left">{caption}</h3>
        </div>
      </motion.div>
    );
  };

const steps = [
  {
    video: "Assets/videos/sample.mp4",
    caption: 'Choose your Shoes, and make sure to first to check the starting price because that could increase price of your castelo.',
    step: 1,
  },
  {
    video: "Assets/videos/sample.mp4",
    caption: "Customize your Shoes, there are three choices to choose from colors, patterns and stickers. Colors won't affect the price but patterns and stickers will Affect the price.",
    step: 2,
  },
  {
    video: "Assets/videos/sample.mp4",
    caption: "Done?, first check you happy with it? if yes then the next step it's to enter your information and pay the specified price then wait for 3 Days then there you go.",
    step: 3,
  },
];