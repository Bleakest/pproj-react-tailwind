import React from "react";
import me from "../../img/me.jpeg";
import me2 from "../../img/me2.jpeg";
import me3 from "../../img/me3.jpeg";
import styles from './ModalPhotos.module.scss'



export default function ModalContent({ isVisible, setVisible }) {
  return (
    <div
      className={styles.modal}
      onClick={() => setVisible((isVisible = false))}
    >
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className="text-slate-400">2021 год</div>
        <section className="flex">
          <img src={me3} alt="me" width="400" className="mx-3 firstphoto" />
          <img src={me2} alt="me" width="400" />
        </section>
        <div className="m-3 text-slate-400">2020 год</div>
        <section className="flex">
          <img src={me} alt="me" width="400" className="mx-3" />
        </section>
      </div>
    </div>
  );
}
