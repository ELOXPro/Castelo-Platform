import { useState } from "react";
import { ChoiceCard, ClothesData, ShoeData } from "../UI/EditorInterface";

export default function Choices(props) {
    const { setItem, setStage, setCastData, item} = props;
    const [step, setStep] = useState(1);
    console.log(item);
    console.log(step);



  return (
    <div className="absolute z-30 bg-white dark:bg-zinc-700 w-full h-full overflow-hidden">
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">
            <div className="w-1/2 h-0 md:h-full">
            </div>
            <div className="w-full md:w-1/2 h-full gap-4 p-4 text-center">
                {step === 1 && item == null ? <ItemChoice setItem={setItem} setStep={setStep}/> : step != 1 && item == "AirForce 1" ? <ShoeData/> : <ClothesData/>}
            </div>
        </div>
    </div>
  )
}

const items = [
    {
      image: "Assets/textures/TShirt/sample.png",
      caption: "T-Shirt",
    },
    {
        image: "Assets/textures/AirForce/sample.png",
        caption: "AirForce 1",
      },
      {
        image: "Assets/textures/Jumper/sample.png",
        caption: "Jumper",
      },
  ];
import React from 'react'

function ItemChoice(props) {
    const { setItem,setStep} = props;
  return (
    <>
    <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">choose an item</h3>
    <div className="flex flex-row justify-center items-center mt-8 flex-wrap gap-4 overflow-y-scroll p-4 h-5/6 w-full">
    {items.map((item, index) => (
                <ChoiceCard image={item.image} caption={item.caption} setItem={setItem} setStep={setStep} key={index}/>
    ))}
    </div>
    </>
  )
}
