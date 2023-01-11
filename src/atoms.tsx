import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE" | string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
