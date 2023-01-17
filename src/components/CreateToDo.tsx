import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos(oldToDos => [
      { id: Date.now(), text: toDo, category: category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "작성 좀 해줘요",
        })}
        placeholder="write a to do"
      />
      <button>저장</button>
    </form>
  );
};

export default CreateToDo;
