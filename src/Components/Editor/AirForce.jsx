import { ShoeTexture } from "../UI/EditorInterface"

export const Stage = () => {
  return (
    <div className="absolute w-full h-full">
            <ShoeTexture 
            type="AirForce" 
            part="base"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture
            type="AirForce" 
            part="inner"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture 
            type="AirForce" 
            part="tongue"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture 
            type="AirForce" 
            part="laces"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture
            type="AirForce" 
            part="upper"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture 
            type="AirForce" 
            part="middle"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture
            type="AirForce" 
            part="toebox"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture
            type="AirForce" 
            part="outertoebox"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture
            type="AirForce" 
            part="abovelogo"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture 
            type="AirForce" 
            part="belowlogo"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture
            type="AirForce" 
            part="behindlogo"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
            <ShoeTexture 
            type="AirForce" 
            part="logo"
            w="w-full md:w-1/3"
            h="h-auto"
            y="top-1/3"
            x="left-0 md:left-1/3"
            />
    <img src={`./Assets/textures/AirForce/sample.png`} alt="Castelo" className={`absolute w-full md:w-1/3 h-auto top-1/3 left-0 md:left-1/3`}  />
    </div>
  )
}
