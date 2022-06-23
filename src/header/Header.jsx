import React from "react";
import styles from "./Header.module.scss";
import vk from "./img/vk.svg.png";
import me from "./img/me.jpeg";

export default function Header() {
  return (
    <div className="bg-zinc-800 border-b-2 border-neutral-500">
      <div className={styles.header}>
        <div className="flex">
          <a href="#" className="flex">
            <img src={vk} className="mr-4 h-9" />
            <p className={styles.logo_title}>petProject</p>
          </a>
          <input className={styles.input} placeholder="Поиск" />
        </div>
        <a href="#">
          <img src={me} className="h-11 w-11 rounded-full" />
        </a>
      </div>
    </div>
  );
}
