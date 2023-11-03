import React from 'react'
import { motion } from 'framer-motion'
import { ImageCard, VideoCard } from './UI/UserInterface';

export const Features = () => {
  return (
    <div className="flex flex-col py-10 md:py-20 w-full h-full gap-4 px-2 md:px-4 text-center bg-gradient-to-bl from-zinc-300 via-zinc-200 to-zinc-100">
      <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">Features</h3>
      <h3 className="capitalize text-zinc-400 text-base md:text-xl font-bold">Features to customize your shoes.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
        {shoesfeatures.map((feature, index) => (
          <ImageCard image={feature.image} caption={feature.caption} feature={feature.feature} key={index}/>))}
      </div>
      <h3 className="capitalize text-zinc-400 text-base md:text-xl font-bold">Features to customize your Clothes.</h3>
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
    caption: "we provide you with a variety colors that can be painted on any any part of your shoe and feel free to choose your own design. here you are the only one to limit yourself ",
    feature: "Colors",
  },
  {
    image: "Assets/misc/pattern.png",
    caption: "Customize your Shoes, there are three choices to choose from colors, patterns and stickers. Colors won't affect the price but patterns and stickers will Affect the price.",
    feature: "Patterns",
  },
  {
    image: "Assets/misc/sticker.png",
    caption: "Done?, first check you happy with it? if yes then the next step it's to enter your information and pay the specified price then wait for 3 Days then there you go.",
    feature: "Stickers",
  },
];

const clothesfeatures = [
  {
    image: "Assets/misc/color.png",
    caption: "we provide you with a variety colors that can be painted on any any part of your shoe and feel free to choose your own design. here you are the only one to limit yourself ",
    feature: "Colors",
  },
  {
    image: "Assets/misc/upload.png",
    caption: "Customize your Shoes, there are three choices to choose from colors, patterns and stickers. Colors won't affect the price but patterns and stickers will Affect the price.",
    feature: "Upload Your Image",
  },
  {
    image: "Assets/misc/sticker.png",
    caption: "Done?, first check you happy with it? if yes then the next step it's to enter your information and pay the specified price then wait for 3 Days then there you go.",
    feature: "Stickers",
  },
];