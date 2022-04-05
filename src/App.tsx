import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { NewTodo } from "./components/NewTodo";
import { SearchTodo } from "./components/SearchTodo";
import { Todos } from "./components/Todos";
import { todosList } from "./Constants";
import { Todo } from "./models/Todo";

function App() {
  const todosStorage = localStorage.getItem("todos");
  const todosStorageArray = JSON.parse(todosStorage || "[]") as Todo[];
  console.log(todosStorageArray, "");
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
    console.log(todos);
  }, [todos]);
  // localStorage.setItem("todos", JSON.stringify(todos));
  const onAddHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text, false)]);
    console.log(todos);

    //  localStorage.setItem("todos", JSON.stringify(todos));
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

  todos.sort((a, b) => +a.isChecked - +b.isChecked);
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  // console.log(todos);

  const onLoginHandler = (login: boolean) => {
    setIsLogin(login);
  };
  return (
    <div className="App">
      {!isLogin && <Login onLogin={onLoginHandler} />}
      {isLogin && (
        <div>
          <SearchTodo onFilter={onFilterHandler} />
          <NewTodo onAdd={onAddHandler} />
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
