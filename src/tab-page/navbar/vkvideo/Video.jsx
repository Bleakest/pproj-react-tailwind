import React, { useState } from "react";
import ModalVideo from "./ModalVideo";

export default function Video() {
  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div className="w-full h-24 text-center hover:text-red-600" onClick={handleVisibility} >
        <div className="pt-3 text-xl">2</div>
        <div>video</div>
        
      </div>
      {isVisible && <ModalVideo isVisible={isVisible} setVisible={setVisible} />}
    </>
  );
}
