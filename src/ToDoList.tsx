import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import Todo from "./components/Todo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      {/* // 모든 Validation을 마친 호출한 이후에, onValid를 실행하게 됨 */}
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {toDos.map((toDo, i) => {
        console.log("...todo", <Todo key={i} {...toDo} />);
        return <Todo key={toDo.id} {...toDo} />;
      })}
    </div>
  );
};

export default ToDoList;
