import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import { SearchTodo } from "./components/SearchTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const todosList = [new Todo("Learn JS and TapeScript")];
  const [todos, setTodos] = useState(todosList);
  const [search] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
    setFilteredTodos(JSON.parse(localStorage.getItem("todo") || ""));
  }, [todos]);

  useEffect(() => {
    if (search.length === 0) {
      setFilteredTodos(todos);
    }
  }, [search, todos]);
  const onAddHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text)]);
  };

  const onDelete = (todoId: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };

  const onFilterHandler = (search: string) => {
    setFilteredTodos(
      todos.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <SearchTodo onFilter={onFilterHandler} />
      <NewTodo onAdd={onAddHandler} />
      <Todos todos={filteredTodos} onDelete={onDelete} />
    </div>
  );
}

export default App;
