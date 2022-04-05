import { ChangeEvent, FormEvent, useState } from "react";
import { SortTodoString } from "../../models/Todo";
import { Button } from "../UI/Button";

import "./index.css";

export const SortTodo: React.FC<{
  onSorter: (sorter: keyof SortTodoString) => void;
}> = ({ onSorter }) => {
  const [sorter, setSorter] = useState<string>("id");

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSorter(event.target.value);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(sorter);
    onSorter(sorter as keyof SortTodoString);
  };

  return (
    <form onSubmit={submitHandler} className="select">
      <label htmlFor="sorter">Sort:</label>

      <select id="sorter" name="sort" onChange={onChangeHandler}>
        <option value="id">Sort by Date</option>
        <option value="title">Sort by Title</option>
      </select>
      <Button>Sort</Button>
    </form>
  );
};
