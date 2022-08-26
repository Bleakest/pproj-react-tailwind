import React, { useState } from "react";
import ModalFriends from "./ModalFriends";

const Friends = (props) => {
  const { title = "friends" } = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div
        onClick={handleVisibility}
        className="w-full h-24 text-center hover:text-red-600"
      >
        <div className="pt-3 text-xl">6</div>
        <div>{title}</div>
      </div>
      {isVisible && (
        <ModalFriends isVisible={isVisible} setVisible={setVisible} />
      )}
    </>
  );
};

export default Friends;
