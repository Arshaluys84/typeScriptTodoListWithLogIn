import { Todo } from "../../models/Todo";

import "./index.css";

export const TodoItem: React.FC<{
  todo: Todo;
  onDelete: (id: string) => void;
  onChange: (todo: Todo) => void;
}> = ({ todo, onDelete, onChange }) => {
  return (
    <div className="item">
      <input
        type="checkbox"
        id="checkbox"
        checked={todo.isChecked}
        onChange={(e) => onChange({ ...todo, isChecked: e.target.checked })}
      />
      <li>{todo.title}</li>
      <div className="delete" onClick={() => onDelete(todo.id)}>
        X
      </div>
    </div>
  );
};
