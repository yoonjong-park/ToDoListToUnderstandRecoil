import React, { MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const Todo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;

    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { id, text, category: name as any };

      const _convertedToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];

      console.log(_convertedToDos);
      return _convertedToDos;
      // another way
      // let _convertedToDos = [...oldToDos];
      // _convertedToDos[targetIndex] = newToDo;

      // return _convertedToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          TO_DO
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
};

export default Todo;
