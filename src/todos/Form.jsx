import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Context from "../Context";
import { Alert } from "react-bootstrap";
import AddTodo from "./AddTodo";
import Loader from "../loader/Loader";

export default function Form() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false)
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="m-3 p-2 w-full bg-zinc-800 border-2 border-neutral-500 ">
        <h1 className="text-center p-3 font-bold text-xl">Todo app</h1>
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <Alert className="bg-zinc-500 text-center outline-none border-none text-white">
            <Alert.Heading className="text-rose-700">
              You got no todos
            </Alert.Heading>
          </Alert>
        )}
      </div>
    </Context.Provider>
  );
}
