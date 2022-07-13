import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Page from "../tab-page/Page";
import Form from "../todos/Form";
import styles from './tabs.module.scss'

export default function Tabs() {
  return (
    <div className="containter mx-auto max-w-7xl flex text-white">

      <div className={styles.div}>
        <Link to="/home" className={styles.link}>
          My page
        </Link>
        <Link to="/form" className={styles.link}>
          Form
        </Link>
        <Link to="/" className={styles.link}>
          My page
        </Link>
        <Link to="/" className={styles.link}>
          My page
        </Link>
      </div>

      <Routes>
        <Route path="/home" element={<Page />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
