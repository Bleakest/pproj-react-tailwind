import React from "react";
import styles from "./MobBar.module.scss";
import { Link } from "react-router-dom";

export default function MobBar() {
  return (
    <div className={styles.container}>

      <div className={styles.bar}>
        <Link to="/home" className={styles.item} />
        <Link to="/form" className={styles.item} />
        <Link to="/" className={styles.item} />
        <Link to="/" className={styles.item} />
      </div>
    </div>
  );
}
