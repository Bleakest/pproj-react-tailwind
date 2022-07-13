import { useState } from "react";
import DopInfo from "./DopInfo";

export const InfoBtn = (props) => {
  const { title = "Show info" } = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div
        onClick={handleVisibility}
        className="text-center mt-10 mx-4 p-3 rounded-md hover:bg-zinc-400"
      >
        {title}
      </div>
      {isVisible && <DopInfo />}
    </>
  );
};
