import React, { FormEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState, toDoSelector, categoryState } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import Todo from "./components/Todo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector); // 구조 분해 할당 https://bit.ly/3k8Q36a
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: FormEvent<HTMLSelectElement>) => {
    console.log("e", e.currentTarget.value);
    setCategory(e.currentTarget.value);
    // target & currentTarget 차이
    // target = 이벤트 실행 주체
    // currentTarget = evnet 실행 대상
  };

  return (
    <div>
      {/* // 모든 Validation을 마친 호출한 이후에, onValid를 실행하게 됨 */}
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />

      {toDos?.map(toDo => {
        return <Todo key={toDo.id} {...toDo} />;
      })}
      {/* <h2>To Do</h2>
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
      <hr /> */}
    </div>
  );
};

export default ToDoList;
