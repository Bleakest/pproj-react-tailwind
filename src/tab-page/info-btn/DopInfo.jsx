import React from "react";

export default function DopInfo() {

  return (
    <div className="m-3">
      <h1 className="font-bold">Основная информация</h1>
      <div className="flex">
        <p className="m-3 text-slate-400">Родной город:</p>
        <p className="m-3">Краснодар</p>
      </div>
      <div className="flex">
        <p className="m-3 text-slate-400">Языки:</p>
        <p className="m-3">Русский/Английский/Js</p>
      </div>
      <h1 className="font-bold mt-3">Образование:</h1>
      <div className="m-3">Среднее-проффесиональное</div>
    </div>
  );
}
