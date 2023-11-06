import React from 'react'
import { VideoCard } from './UI/UserInterface'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className="flex flex-col gap-8 py-10 w-full h-full bg-white dark:bg-zinc-700 px-2 md:px-10 text-center">
      <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">how does this works ?</h3>
      <h3 className="capitalize text-zinc-500 dark:text-zinc-200 text-base md:text-xl font-bold">it's super easy just follow these simple steps.</h3>
      <div className="flex flex-col md:flex-row gap-4 w-full items-center">
        <div className='flex flex-col w-full md:w-1/2 gap-1'>
          {steps.map((step, index) => (
            <motion.div className="gap-2 text-zinc-500 dark:text-zinc-200 text-sm md:text-base font-bold text-left" key={index}
            initial={{
              opacity: 0,
              x:-50,
            }}
            whileInView={{
                opacity: 1,
                x:0,
                transition:{
                  duration: 1,
                  delay: 0 + index * 0.1,
                }
            }}
            >
            <h3 className="text-green-500 text-base md:text-xl font-bold">
            {step.step}</h3>
            <p className='hover:md:text-xl transition-all'>
            {step.caption}
            </p>
            </motion.div>))}
        </div>
        <div className='w-full md:w-1/2'>
          <VideoCard video="/Assets/videos/sample.mp4"/>
        </div>
      </div>
      <h3 className="capitalize text-zinc-500 dark:text-zinc-200 text-base md:text-xl font-bold">if you face any problem before or after purchase be sure to check our contact page.</h3>
    </div>
  )
}

const steps = [
  {
    step: "Step 1",
    caption: 'click on the get started or customize now button.',
  },
  {
    step: "Step 2",
    caption: 'choose an item you want to customize.',
  },
  {
    step: "Step 3",
    caption: 'customize the item then click on buy.',
  },
  {
    step: "Step 4",
    caption: 'check your cart and buy your castelo.',
  },
  {
    step: "Step 5",
    caption: 'wait three days then there you go.',
  },
  {
    step: "Thanks",
    caption: 'for working with us we appreciate your presence.',
  },
]