import React from "react";
import styles from "./ModalVideo.module.scss";
import video from "./videoitem/kitty.mp4";
import video2 from "./videoitem/shadow.mp4";
import pic from './videoitem/pic.jpg'

function ModalVideo({ isVisible, setVisible }) {
  return (
    <div className={styles.bg} onClick={() => setVisible(!isVisible)}>
      <div
        className="w-50 bg-zinc-900 rounded-md border-2 border-zinc-700 "
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="p-4 font-semibold ">Videos 2</h1>
        <hr />

        <div className="flex p-4 justify-between h-full">
          <video src={video} height='400' width='550' controls></video>
          <video src={video2}  height='400' width='550' controls poster={pic}></video>
        </div>
      </div>
    </div>
  );
}

export default ModalVideo;
