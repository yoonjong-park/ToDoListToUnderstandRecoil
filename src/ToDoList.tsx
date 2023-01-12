import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState, toDoSelector } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import Todo from "./components/Todo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector); // 구조 분해 할당 https://bit.ly/3k8Q36a

  return (
    <div>
      {/* // 모든 Validation을 마친 호출한 이후에, onValid를 실행하게 됨 */}
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      {toDo.map((toDo, i) => {
        return <Todo key={toDo.id} {...toDo} />;
      })}
      <hr />

      <h2>Doing</h2>
      {doing.map((toDo, i) => {
        return <Todo key={toDo.id} {...toDo} />;
      })}
      <hr />
      <h2>Done</h2>
      {done.map((toDo, i) => {
        return <Todo key={toDo.id} {...toDo} />;
      })}
      <hr />
    </div>
  );
};

export default ToDoList;
