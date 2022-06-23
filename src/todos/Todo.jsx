import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Context from "../Context";

export default function Todo({ todo, onChange }) {

  const {removeTodo} = useContext(Context)

  const styles = {
    span: {
      display: "flex",
      alignItems: "center",
    },
  };

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="flex m-2 p-3 bg-zinc-700 justify-between	">
      <span style={styles.span} className={classes.join(" ")}>
        <input
          checked={todo.completed}
          type="checkbox"
          className="m-2"
          onChange={() => onChange(todo.id)}
        />
        <div className="p-2">{todo.title}</div>
      </span>
      <Button className="py-1 px-3" variant="danger" onClick={() => removeTodo(todo.id)}>
        &times;
      </Button>
    </li>
  );
}
