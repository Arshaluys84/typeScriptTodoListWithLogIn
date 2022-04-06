import React from "react";
import { Todo } from "../../models/Todo";
import { TodoItem } from "../TodoItem";

import "./index.css";

export const Todos: React.FC<{
  todos: Todo[];
  onDelete: (id: string) => void;
  onChange: (newTodo: Todo) => void;
}> = ({ todos, onDelete, onChange }) => {
  return (
    <ul className="todos">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};
