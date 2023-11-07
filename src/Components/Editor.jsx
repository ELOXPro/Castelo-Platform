import { useState } from "react"
import { Stage } from "./Editor/Stage"
import Choices from "./Editor/Choices";

export const Editor = () => {
  const [stage, setStage] = useState('choices')
  const [item, setItem] = useState(null)
  const [castdata, setCastData] = useState(null)

  let ineditor;
  if(stage === 'choices'){
    ineditor = <Choices setItem={setItem} setStage={setStage} setCastData={setCastData} item={item}/>
  }
  else if(stage === 'stage'){
    ineditor = <Stage/>
  }
  return (
    <div className="w-full h-full">
    {ineditor}
    </div>
  )
}
