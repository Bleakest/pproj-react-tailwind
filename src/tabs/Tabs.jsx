import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Page from "../tab-page/Page";
import Form from "../todos/Form";

export default function Tabs() {
  return (
    <div className="containter mx-auto max-w-7xl flex text-red text-white">

      <div className="flex flex-col font-medium mt-3 whitespace-nowrap ">
        <Link to="/home" className="mx-3 py-2 px-14 rounded-lg hover:bg-slate-500 hover:text-white">
          My page
        </Link>
        <Link to="/form" className="mx-3 py-2 px-14 rounded-lg hover:bg-slate-500 hover:text-white  ">
          Form
        </Link>
        <Link to="/" className="mx-3 py-2 px-14 rounded-lg hover:bg-slate-500 hover:text-white  ">
          My page
        </Link>
        <Link to="/" className="mx-3 py-2 px-14 rounded-lg hover:bg-slate-500 hover:text-white  ">
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
