import { ChangeEvent, FormEvent, useState } from "react";
import "./index.css";

export const SearchTodo: React.FC<{
  onFilter: (search: string) => void;
}> = ({ onFilter }) => {
  const [search, setSearch] = useState<string>("");

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
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="search">search:</label>
      <input
        type="text"
        id="search"
        placeholder="enter for search"
        name="text"
        value={search}
        onChange={onChangeHandler}
      />
      <button>Search</button>
    </form>
  );
};
