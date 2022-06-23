import React from "react";
import Slider from "./Slider";
import styles from "./Page.module.scss";
import { Form } from "react-bootstrap";

export default function Page() {
  return (
    <div className="flex w-full">
      <div className={styles.div}>
        <Slider />
      </div>
      <div className="p-2 m-3 bg-zinc-800 rounded-md border-2 border-neutral-500 w-full">
        <div className="flex justify-between align-center">
          <h1 className="font-bold text-2xl p-3">Дмитрий Колесников</h1>
          <p className="text-slate-400 p-3">online</p>
        </div>
        <Form.Select className="bg-zinc-700 border-none text-white">
          <option value="1">Working</option>
          <option value="2">Chill</option>
          <option value="3">Vacation</option>
        </Form.Select>
        <div className="flex justify-between mx-4 my-10">
          <p>Stack:</p>
          <p>Html/Css(Sass)/Bootstrap/Tailwind/Js/React</p>
        </div>
        <div className="flex justify-between mx-4 my-12">
          <p>Contacts</p>
          <p>tg:falsesolution</p>
        </div>
      </div>
    </div>
  );
}
