import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log("data", data);
  };
  console.log("formState", formState.errors);
  return (
    <div>
      {/* // 모든 Validation을 마친 호출한 이후에, onValid를 실행하게 됨 */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", { required: true })}
          //  required 를 직접 사용하지 않는 이유 : User의 조작을 방지하기 위함
          placeholder="Email"
        />
        <input
          {...register("FirstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("LastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("Username", {
            required: "작성해주세요.",
            minLength: { value: 5, message: "5자 이상 적어주세요." },
          })}
          placeholder="Username"
        />
        {formState.errors.Username && <>{formState.errors.Username.message}</>}
        <input
          {...register("Password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
