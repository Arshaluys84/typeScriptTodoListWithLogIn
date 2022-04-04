import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const todosni = [new Todo("Learn JS and TapeScript")];
  const [todos, setTodos] = useState(todosni);
  // ["Learn JS", "Learn TypeScript"];
  const onAddHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text)]);
  };
  const onDelete = (todoId: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };
  return (
    <div className="App">
      <NewTodo onAdd={onAddHandler} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
// import "./App.css";

// function App() {
//   return <div className="App"></div>;
// }

// export default App;
