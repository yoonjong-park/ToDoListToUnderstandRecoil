import React from "react";
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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });
  console.log("errors", errors);

  const handleValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "password와 다릅니다." },
        { shouldFocus: true }
      );
      // 에러가 있는 input 으로 focus 해주는 점이 좋음.
    }
    // setError("extraError", { message: "Server offline" });
    console.log("errors", errors);
    console.log("data", data);
    //
  };

  return (
    <div>
      {/* // 모든 Validation을 마친 호출한 이후에, onValid를 실행하게 됨 */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("email", {
            required: "입력은 필수",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com/,
              message: "네이버 메일만 가입이 가능합니다.",
            },
          })}
          //  required 를 직접 사용하지 않는 이유 : User의 조작을 방지하기 위함
          placeholder="Email"
        />
        <>{errors.email?.message}</>
        <input
          {...register("firstName", {
            required: "입력은 필수",
            validate: {
              noHacker: value =>
                value.includes("hacker") ? "해커. 잘가요" : true,
              noDicker: value =>
                value.includes("dicker") ? "고추. 잘가요" : true,
              // return string은 error message를 전달
              // 여러 개 등록하는 것도 가능
            },
          })}
          placeholder="First Name"
        />
        <>{errors.firstName?.message}</>
        <input
          {...register("lastName", { required: "입력은 필수" })}
          placeholder="Last Name"
        />
        <>{errors.lastName?.message}</>
        <input
          {...register("username", {
            required: "입력은 필수",
            minLength: { value: 5, message: "5자 이상 적어주세요." },
          })}
          placeholder="Username"
        />
        <>{errors.username?.message}</>
        <input
          {...register("password", {
            required: "입력은 필수",
            minLength: { value: 5, message: "5자 이상 적어주세요." },
          })}
          placeholder="Password"
        />
        <>{errors.password?.message}</>
        <input
          {...register("password1", {
            required: "입력은 필수",
            minLength: { value: 5, message: "5자 이상 적어주세요." },
          })}
          placeholder="Password Confirm"
        />
        <>{errors.password1?.message}</>
        <button>저장</button>
        <>{errors.extraError?.message}</>
      </form>
    </div>
  );
};

export default ToDoList;
