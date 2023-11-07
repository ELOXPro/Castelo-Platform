import React from 'react'
import { motion } from 'framer-motion'
import { ImageCard, VideoCard } from './UI/UserInterface';

export const Features = () => {
  return (
    <div className="flex flex-col py-10 md:py-20 w-full h-full gap-4 px-2 md:px-4 text-center bg-gradient-to-l from-white via-zinc-300 to-white  dark:from-zinc-700 dark:via-zinc-400 dark:to-zinc-700">
      <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">Features</h3>
      <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Features to customize your shoes.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
        {shoesfeatures.map((feature, index) => (
          <ImageCard image={feature.image} caption={feature.caption} feature={feature.feature} key={index}/>))}
      </div>
      <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Features to customize your Clothes.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
        {clothesfeatures.map((feature, index) => (
          <ImageCard image={feature.image} caption={feature.caption} feature={feature.feature} key={index}/>))}
      </div>
    </div>
  )
}

const shoesfeatures = [
  {
    image: "Assets/misc/color.png",
    caption: "we provide you with a variety colors that can be painted on any any part of your shoe and feel free to choose your own design. here you are the only one to limit yourself.",
    feature: "Colors",
  },
  {
    image: "Assets/misc/pattern.png",
    caption: "Using Only Colors it's not liked by all that's why we add a lot of other designs that a client will choose from so feel free to use them they are all yours.",
    feature: "Patterns",
  },
  {
    image: "Assets/misc/sticker.png",
    caption: "We all love stickers you want an emoji we got you, what about a heart or a butterfly look no further just go check for yourself. there are more than that.",
    feature: "Stickers",
  },
];

const clothesfeatures = [
  {
    image: "Assets/misc/color.png",
    caption: "on clothes there is no difference, we provide you with a variety colors that can be painted on any any part of your clothes but they are not as many as of shoes but they are good.",
    feature: "Colors",
  },
  {
    image: "Assets/misc/upload.png",
    caption: "we added that you can use your own preferred image just what you do you upload it and then we will take care of the rest.",
    feature: "Upload Your Image",
  },
  {
    image: "Assets/misc/sticker.png",
    caption: "Of course we didn't forget the lovely stickers and you wanna know some thing cool? you can add it wherever you like.",
    feature: "Stickers",
  },
  {
    image: "Assets/misc/text.png",
    caption: "Then Finally Comes Text On Your Clothes It would have been nothing without this feature so we can't forget it.we hope you enjoy your castelo experience",
    feature: "Text",
  },
];