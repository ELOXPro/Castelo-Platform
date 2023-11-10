import { useState, useEffect } from "react";
import { ChoiceCard, ChoiceRadio } from "../UI/EditorInterface";
import { AbsoluteButton, PrimaryButton } from "../UI/UserInterface";

export default function Choices(props) {
    const { setItem, setStage, setCastData, item, castdata, setPage} = props;
    const [step, setStep] = useState(1);
    
    const handleBack = () => {
      setCastData({
        quality : null,
        size : null,
      })
      setStep(1);
    }
    useEffect(() => {
      if (step === 3) {
        if (
          (item === "AirForce 1" && castdata.size !== null) ||
          (item !== "AirForce 1" && castdata.size !== null && castdata.quality !== null)
        ) {
          setStage("stage");
        } else {
          alert("Please Enter The Needed Information");
          setStep(2);
        }
      }
    }, [step, item, castdata, setStage]);

  return (
    <div className="absolute z-30 bg-white dark:bg-zinc-700 w-full h-full overflow-hidden">
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">
            <div className="w-1/2 h-0 md:h-full border-4 rounded-3xl border-white overflow-hidden dark:border-zinc-700">
            <img src={"/Assets/textures/choices Back.png"} alt="sample"/>
            </div>
            <div className="w-full md:w-1/2 h-full gap-4 p-4 text-center">
                {step === 1 ? <ItemChoice setItem={setItem} setStep={setStep} setPage={setPage}/> : step != 1 && item == "AirForce 1" ? <ShoeData item={item} setStep={setStep} castdata={castdata} setCastData={setCastData} handleBack={handleBack}/> : <ClothesData item={item} setStep={setStep} castdata={castdata} setCastData={setCastData} handleBack={handleBack}/>}
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

const ItemChoice = (props) => {
    const { setItem,setStep, setPage} = props;
  return (
    <>
    <AbsoluteButton
      onClick={() => setPage("Home")}
      label="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
    />
    <h3 className="capitalize text-green-500 text-2xl md:text-4xl font-extrabold">choose an item</h3>
    <div className="flex flex-row justify-center items-center mt-8 flex-wrap gap-4 overflow-y-scroll p-4 h-5/6 w-full">
    {items.map((item, index) => (
      <ChoiceCard image={item.image} caption={item.caption} setItem={setItem} setStep={setStep} key={index}/>
    ))}
    </div>
    </>
  )
}

const qualities = [
  {
    type: "standard",
    name: "quality",
  },
  {
    type: "premium",
    name: "quality",
  },
];

const sizes = [
  {
    type: "small",
    name: "size",
  },
  {
    type: "medium",
    name: "size",
  },
  {
    type: "large",
    name: "size",
  },
  {
    type: "xl",
    name: "size",
  },
  {
    type: "xxl",
    name: "size",
  },
  {
    type: "xxxl",
    name: "size",
  },
];

const shoesizes = [
  {
    type: "eur 38",
    name: "size",
  },
  {
    type: "eur 39",
    name: "size",
  },
  {
    type: "eur 40",
    name: "size",
  },
  {
    type: "eur 41",
    name: "size",
  },
  {
    type: "eur 42",
    name: "size",
  },
  {
    type: "eur 43",
    name: "size",
  },
  {
    type: "eur 44",
    name: "size",
  },
  {
    type: "eur 45",
    name: "size",
  },
];


const ClothesData = (props) => {
  const {setStep, setCastData, item, castdata,handleBack} = props;

  return (
    <div className="flex flex-col justify-start items-center bg-white dark:bg-zinc-700 w-full h-full gap-6 overflow-hidden px-4">
      <h3 className="capitalize text-green-500 text-2xl font-bold text-center">Pick What You Prefer</h3>
      <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Enter The Preferred Quality According to your Budget.</h3>
      <div className="grid grid-cols-2 justify-start items-center rounded-2xl border border-green-700 w-full overflow-hidden shadow-lg dark:shadow-white shadow-zinc-700">
      {qualities.map((item, index) => (
      <ChoiceRadio type={item.type} name={item.name} key={index} index={index} castdata={castdata} setCastData={setCastData}/>
    ))}
      </div>
      <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Enter The Preferred Size of {item}.</h3>
      <div className="grid grid-cols-2 justify-start items-center rounded-2xl border border-green-700 w-full overflow-hidden shadow-lg dark:shadow-white shadow-zinc-700">
      {sizes.map((item, index) => (
      <ChoiceRadio type={item.type} name={item.name} key={index} index={index} castdata={castdata} setCastData={setCastData}/>
    ))}
      </div>
      <div className="flex flex-row gap-4">
        <PrimaryButton label="Continue" onClick={()=>setStep(3)}/>
        <PrimaryButton label="Back" onClick={handleBack}/>
      </div>
    </div>
  );
};

const ShoeData = (props) => {
  const {setStep, setCastData, item, castdata, handleBack} = props;
  const [specified, setSpecified] = useState("");

  const handleClick = () => {
    if (specified){
    if (specified < 28 || specified > 45 ){
      alert("Please enter a Valid Size");
      setSpecified ("")
    }else {
    setCastData({
      ...castdata,
      size : "eur " + specified,
    })
    setStep(3);}}
    if(!specified){
    setStep(3);}
  }

  return (
    <div className="flex flex-col justify-start items-center bg-white dark:bg-zinc-700 w-full h-full gap-6 overflow-hidden px-4">
      <h3 className="capitalize text-green-500 text-2xl font-bold text-center">Pick Your {item} Size.</h3>   
      <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Warning: It must be in EUR Format.</h3>
      <div className="grid grid-cols-2 justify-start items-center rounded-2xl border border-green-700 w-full overflow-hidden shadow-lg dark:shadow-white shadow-zinc-700">
      {shoesizes.map((item, index) => (
      <ChoiceRadio type={item.type} name={item.name} key={index} index={index} castdata={castdata} setCastData={setCastData}/>
    ))}
      </div>
      <h3 className="capitalize text-zinc-400 dark:text-zinc-100 text-base md:text-xl font-bold">Didn't find your size enter it below.</h3>
      <input
              className="w-full h-12 shadow appearance-none border rounded py-2 px-3 text-zinc-500 dark:text-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="size"
              value={specified}
              onChange={(e) => setSpecified(e.target.value)}
              placeholder="Enter your Specific Eur Size"
          />
      <div className="flex flex-row gap-4">
        <PrimaryButton label="Continue" onClick={handleClick}/>
        <PrimaryButton label="Back" onClick={handleBack}/>
      </div>
    </div>
  );
};