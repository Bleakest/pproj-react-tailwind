import React, { useState } from "react";

export default function AddTodo({onCreate}) {
  const [value, setValue] = React.useState("");

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
        onCreate(value)
        setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        className="text-slate-100 m-2 p-1 bg-zinc-600 outline-none font-bold border-2 border-neutral-500"
        type="text"
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="submit"
        className="border-2 border-neutral-500 rounded-lg py-1 px-4 hover:bg-rose-700	"
      >
        add todo
      </button>
    </form>
  );
}
