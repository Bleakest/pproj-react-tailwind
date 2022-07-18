import React, { useState } from "react";
import ModalContent from "./ModalPhotos";

const ModalBtn = (props) => {
  const { title = "photo" } = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div className="w-full h-24 text-center hover:text-red-600" onClick={handleVisibility}>
        <div className="pt-3 text-xl">3</div>
        <div>{title}</div>
      </div>
      {isVisible && (
        <ModalContent isVisible={isVisible} setVisible={setVisible} />
      )}
    </>
  );
};

export default ModalBtn;
