import { Todo } from "../models/Todo";

export const todosList = [
  { ...new Todo("Learn JS", false), id: "1" },
  { ...new Todo("Learn TypeScript", false), id: "11" },
  { ...new Todo("Learn JS and TypeScript", false), id: "111" },
];
localStorage.setItem("todos", JSON.stringify(todosList));
