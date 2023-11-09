import { useState } from "react"
import { Stage } from "./Editor/Stage"
import Choices from "./Editor/Choices";

export const Editor = (props) => {
  const {setPage} = props;
  const [stage, setStage] = useState('choices')
  const [item, setItem] = useState(null)
  const [castdata, setCastData] = useState({
    size: null,
    quality: null,
  })
  console.log(item);
  console.log(castdata);

  let ineditor;
  if(stage === 'choices'){
    ineditor = <Choices setItem={setItem} setStage={setStage} setCastData={setCastData} item={item} castdata={castdata} setPage={setPage}/>
  }
  else if(stage === 'stage'){
    ineditor = <Stage item={item} setPage={setPage}/>
  }
  return (
    
    <div className="w-full h-full">
    {ineditor}
    </div>
  )
}
