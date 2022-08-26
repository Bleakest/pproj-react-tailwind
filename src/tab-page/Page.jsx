import React from "react";
import styles from "./Page.module.scss";
import { InfoBtn } from "./info-btn/InfoBtn";
import { Slider } from "./Slider/Slider";

import me from "./img/me.jpeg";
import me2 from "./img/me2.jpeg";
import me3 from "./img/me3.jpeg";
import Navbar from "./navbar/Navbar";

export default function Page() {
  
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Slider>
          <div className={styles.item}>
            <img src={me} />
          </div>
          <div className={styles.item}>
            <img src={me2} />
          </div>
          <div className={styles.item}>
            <img src={me3} />
          </div>
        </Slider>
      </div>
      <div className={styles.page}>
        <div className={styles.page_name}>
          <h1 className={styles.page_title}>Дмитрий Колесников</h1>
          <p className="text-slate-400 p-3">online</p>
        </div>
        <div className={styles.page_desc}>
          <p>Stack:</p>
          <p>Html/Css(Sass)/Js/React</p>
        </div>
        <div className={styles.page_desc}>
          <p>Contacts</p>
          <p>Tg:falsesolution</p>
        </div>
        <InfoBtn />
        <Navbar />
      </div>
    </div>
  );
}
