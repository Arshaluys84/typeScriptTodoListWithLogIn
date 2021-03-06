import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

import "./index.css";

export const SearchTodo: React.FC<{
  onFilter: (search: string) => void;
}> = ({ onFilter }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setTimeout(() => {
      onFilter(event.target.value);
    }, 300);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setTimeout(() => {
      onFilter(search);
    }, 300);
  };

  return (
    <form onSubmit={submitHandler} className="form search">
      <label htmlFor="search">search:</label>
      <Input
        type="text"
        id="search"
        placeholder="Search"
        name="text"
        value={search}
        onChange={onChangeHandler}
      />
      <Button>Search</Button>
    </form>
  );
};
