import { Todo } from "../models/Todo";

export const todosList = [
  { ...new Todo("Learn JS", false), id: "1" },
  { ...new Todo("Learn TypeScript", false), id: "2" },
  { ...new Todo("Learn JS and TypeScript", false), id: "3" },
];
