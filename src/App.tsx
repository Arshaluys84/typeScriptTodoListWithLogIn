import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { NewTodo } from "./components/NewTodo";
import { SearchTodo } from "./components/SearchTodo";
import { SortTodo } from "./components/SortTodo";
import { Todos } from "./components/Todos";
import { todosList } from "./Constants";
import { SortTodoString, Todo } from "./models/Todo";

function App() {
  const todosStorage = localStorage.getItem("todos");
  const todosStorageArray = JSON.parse(todosStorage || "[]") as Todo[];
  if (todosStorageArray.length === 0) {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }

  const [todos, setTodos] = useState(todosStorageArray);
  const [search] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isLogin === false) {
      setIsLogin(JSON.parse(localStorage.getItem("login") || "false"));
    }
  }, [isLogin]);
  useEffect(() => {
    if (search.length === 0) {
      setFilteredTodos(todos);
    }
  }, [search, todos]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onAddHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text, false)]);
    console.log(todos);
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
  const onCheckBoxChangeHandler = (newTodo: Todo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        } else {
          return todo;
        }
      })
    );
  };

  const onLoginHandler = (login: boolean) => {
    setIsLogin(login);
  };

  const onSortHandler = (sorter: keyof SortTodoString) => {
    const todoStorage = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as Todo[];
    setTodos(
      todoStorage.sort((a: SortTodoString, b: SortTodoString) =>
        a[sorter].localeCompare(b[sorter])
      )
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };
  todos.sort((a, b) => +a.isChecked - +b.isChecked);
  return (
    <div className="App">
      {!isLogin && <Login onLogin={onLoginHandler} />}
      {isLogin && (
        <div>
          <SearchTodo onFilter={onFilterHandler} />
          <NewTodo onAdd={onAddHandler} />
          <SortTodo onSorter={onSortHandler} />
          <Todos
            todos={filteredTodos}
            onDelete={onDelete}
            onChange={onCheckBoxChangeHandler}
          />
        </div>
      )}
    </div>
  );
}

export default App;
