import React from "react";
import { IToDo } from "../atoms";

const Todo = ({ text }: IToDo) => {
  return (
    <li>
      <span>{text}</span>
      <button>Done</button>
      <button>Doing</button>
      <button>To do</button>
    </li>
  );
};

export default Todo;
