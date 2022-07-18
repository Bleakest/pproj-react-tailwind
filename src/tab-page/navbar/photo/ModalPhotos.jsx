import React from "react";
import "./Modal.css";
import me from "../../img/me.jpeg";
import me2 from "../../img/me2.jpeg";
import me3 from "../../img/me3.jpeg";

export default function ModalContent({ isVisible, setVisible }) {
  return (
    <div
      className="modal block"
      onClick={() => setVisible((isVisible = false))}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="m-3 text-slate-400">2021 год</div>
        <section className="flex">
          <img src={me3} alt="me" width="500" className="mx-3" />
          <img src={me2} alt="me" width="500" />
        </section>
        <div className="m-3 text-slate-400">2020 год</div>
        <section className="flex">
          <img src={me} alt="me" width="500" className="mx-3" />
        </section>
      </div>
    </div>
  );
}
