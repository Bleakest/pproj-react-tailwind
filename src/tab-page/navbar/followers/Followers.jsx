import React, { useState } from "react";
import ModalFollowers from "./ModalFollowers";

const Followers = (props) => {
  const { title = "followers" } = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible)

  return (
    <>
      <div onClick={handleVisibility} className="w-full h-24 text-center hover:text-red-600">
        <div className="pt-3 text-xl">5</div>
        <div>{title}</div>
      </div>
      {isVisible && <ModalFollowers isVisible={isVisible} setVisible={setVisible} />}
    </>
  );
};

export default Followers;
