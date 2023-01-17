import React, { FormEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState, toDoSelector, categoryState, Categories } from "./atoms";
import CreateToDo from "./components/CreateToDo";
import Todo from "./components/Todo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector); // 구조 분해 할당 https://bit.ly/3k8Q36a
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: FormEvent<HTMLSelectElement>) => {
    console.log("e", e.currentTarget.value);
    setCategory(e.currentTarget.value as any);
    // target & currentTarget 차이
    // target = 이벤트 실행 주체
    // currentTarget = evnet 실행 대상
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />

      {toDos?.map(toDo => {
        return <Todo key={toDo.id} {...toDo} />;
      })}
    </div>
  );
};

export default ToDoList;
