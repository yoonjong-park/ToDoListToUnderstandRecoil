import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

/* const ToDoList = () => {
  const [toDo, setTodo] = useState("");
  const [toDoError, setTodoError] = useState("");
  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
    return setTodoError("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setTodoError("To do should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Write a to do" onChange={onChange} value={toDo} />
        <button>add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}; */

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { setValue, register, handleSubmit } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    console.log("data.toDo", toDo);
    setToDos(oldToDos => [{ text: toDo, category: "TO_DO" }, ...oldToDos]);
    setValue("toDo", "");
    // toDos.push();
  };

  console.log("toDos", toDos);

  return (
    <div>
      {/* // 모든 Validation을 마친 호출한 이후에, onValid를 실행하게 됨 */}
      <h1>To Dos</h1>
      <hr />
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
    </div>
  );
};

export default ToDoList;
