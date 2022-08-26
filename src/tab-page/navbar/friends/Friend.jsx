import React from "react";
import styles from "./Friend.module.scss";

export default function Friend(props) {
  return (
    <div className={styles.img_container}>
      <a href="/">
        <img src={props.friend.avatar} alt="friend" className={styles.img} />
        <div className="p-2 text-white">{props.friend.name}</div>
      </a>
    </div>
  );
}
