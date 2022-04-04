import React from "react";
import { Todo } from "../../models/Todo";
import TodoItem from "../TodoItem";
import "./index.css";

const Todos: React.FC<{ todos: Todo[]; onDelete: (id: string) => void }> = ({
  todos,
  onDelete,
}) => {
  return (
    <ul className="todos">
      {todos.map((item) => (
        //   <li key={item.id}>{item.title}</li>
        <TodoItem key={item.id} todo={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
