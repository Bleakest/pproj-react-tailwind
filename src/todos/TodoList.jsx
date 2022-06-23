import React from "react";
import Todo from "./Todo.jsx";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} onChange={props.onToggle} />;
      })}
    </ul>
  );
}
