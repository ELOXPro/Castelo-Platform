import { useState, useEffect } from "react";
import { Stage } from "./Editor/Stage";
import Choices from "./Editor/Choices";

export const Editor = (props) => {
  const { setPage } = props;
  const [stage, setStage] = useState("choices");
  const [item, setItem] = useState(null);
  const [castdata, setCastData] = useState({
    size: null,
    quality: null,
  });

  useEffect(() => {
    console.log(item);
    console.log(castdata);
  }, [item, castdata]);

  useEffect(() => {
    if (stage === "choices") {
    } else if (stage === "stage") {
    }
  }, [stage]);

  return (
    <div className="w-full h-full">
      {stage === "choices" && (
        <Choices
          setItem={setItem}
          setStage={setStage}
          setCastData={setCastData}
          item={item}
          castdata={castdata}
          setPage={setPage}
        />
      )}
      {stage === "stage" && <Stage item={item} setPage={setPage} />}
    </div>
  );
};
