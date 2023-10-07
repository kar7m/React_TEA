import React, { useState, useCallback } from "react";
import "./App.css";
import _ from "lodash";
import MyForm from "./components/MyForm";

export default function App() {
  const [arrTasks, setArrTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const submitBtn = useCallback(
    (inputValue) => {
      if (inputValue === "") {
        return;
      }
      const item = {
        text: inputValue,
        id: _.uniqueId("task_"),
        done: false,
      };
      setArrTasks((prevTasks) => [...prevTasks, item]);
      setInputValue("");
    },
    []
  );

  const doneProcess = useCallback(
    (id) => {
      setArrTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    },
    []
  );

  const deleteProcess = useCallback(
    (id) => {
      setArrTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    },
    []
  );

  return (
    <div  className="wrappper">
      <h1 className={"heading"}>To Do List</h1>
      <MyForm onSubmit={submitBtn} inputValue={inputValue} setInputValue={setInputValue} />
      <div>
        {arrTasks.map((i) => (
          <div className={"tasks__wrapper"} key={i.id}>
            <span
            className={i.done ? "deleted__task" : "new__task"}
            >
              {i.text}
            </span>
            <div className={"done__delete__btns"}>
            <button className={"done__btn"} onClick={() => doneProcess(i.id)}>{i.done ? "Undo" : "Done"}</button>
            <button className={"delete__btn"} onClick={() => deleteProcess(i.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
