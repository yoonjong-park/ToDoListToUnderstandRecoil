import React, { FormEvent, useState } from "react";

const ToDoList = () => {
  const [toDo, setTodo] = useState("");
  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("value", toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Write a to do" onChange={onChange} />
        <button>add</button>
      </form>
    </div>
  );
};

export default ToDoList;
