import { AbsoluteButton } from "../UI/UserInterface";

export const Stage = (props) => {
  const {item, color, image, setPage} = props;
 let onstage;

 if(item === "T-Shirt"){
   onstage = <Tshirt color={color} image={image}/>
 }
 if(item === "Jumper"){
  onstage = <Jumper color={color} image={image}/>
}

  return (
  <> 
  <AbsoluteButton
      onClick={() => setPage("Home")}
      label="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
  />
  <div className="absolute z-30 w-full h-full bg-white dark:bg-zinc-700">
    {onstage}
  </div>
  </>
  )
}

const Tshirt = (props) => {
  const {color, image} = props;


  return (
    <div className="absolute w-full md:w-1/3 top-0 md:top-20 md:inset-x-1/3 h-auto">
      <svg
      className="w-full h-full fill-yellow-700"
      viewBox="0 0 3000 3000"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="m 602,1324.0928 133.0068,-308.6949 99.25885,-251.12483 c 0,0 -0.99259,-31.76282 111.16985,-86.35518 112.1625,-54.59236 267.0063,-139.95495 267.0063,-139.95495 l 3.9703,3.97035 0.9926,27.79248 25.8073,32.75541 96.2811,-48.63683 7.9407,6.94812 -10.9185,7.94071 34.7406,10.91847 c 0,0 38.711,18.85918 113.1551,15.88141 74.4441,-2.97776 141.9401,-10.91847 141.9401,-10.91847 l 41.6887,-7.94071 -4.9629,-9.92588 h -0.9926 l 1.9852,-4.96294 97.2736,50.622 13.8962,-40.69612 2.9778,-38.71094 62.5331,42.6813 126.0587,60.54788 95.2885,34.74059 86.3551,52.60718 35.7332,42.6813 118.118,301.74685 61.5405,150.8734 13.8962,34.7406 19.8518,67.496 v 9.9259 l -76.4293,21.8369 -83.3774,32.7554 -21.837,13.8962 -102.2365,49.6295 -51.6146,27.7924 h -17.8666 l 13.8962,653.1231 -2.9778,229.2879 4.963,282.8877 v 94.2959 l -11.9111,87.3477 -302.7394,-10.9184 -22.8295,-17.8666 -444.6796,-2.9778 -29.7776,9.9259 -321.5986,18.8592 c 0,0 -19.8518,8.9333 -20.8444,-41.6887 -0.9926,-50.622 8.9333,-262.0433 8.9333,-262.0433 l 8.9333,-189.5844 0.9926,-55.5849 v -210.4288 -189.5843 l 2.9778,-282.8877 -2.9778,-105.2143 -310.6802,-150.8735 z"
      />
      </svg>
      <img src="/Assets/textures/TShirt/hanger.png" alt="Tshirt" className="absolute top-0 w-full h-full"/>
      <img src="/Assets/textures/TShirt/overlay.png" alt="Tshirt" className="absolute top-0 w-full h-full"/>
    </div>
  )
}

const Jumper = (props) => {
  const {color, image} = props;


  return (
    <div className="absolute z-30 w-full md:w-1/3 top-0 md:top-20 md:inset-x-1/3 h-1/2 md:h-4/5">
      <div className="absolute top-0 w-full h-full bg-black"/>
      <img src="/Assets/textures/Jumper/hoodie.png" alt="Jumper" className="absolute top-0 w-full h-full"/>
      <div className="absolute top-0 w-full h-full bg-red-600 mix-blend-multiply"/>
      <img src="/Assets/misc/logo.png" alt="Jumper" className="absolute w-32 h-auto inset-x-[30%] inset-y-[40%]"/>
      <img src="/Assets/textures/Jumper/hoodie.png" alt="Jumper" className="absolute top-0 w-full h-full mix-blend-multiply"/>
      <img src="/Assets/textures/Jumper/laces.png" alt="Jumper" className="absolute top-0 w-full h-full"/>
    </div>
  )
}
