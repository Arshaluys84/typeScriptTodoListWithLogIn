import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

import "./index.css";

export const NewTodo: React.FC<{ onAdd: (text: string) => void }> = ({
  onAdd,
}) => {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setIsValid(true);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (text.trim().length <= 3) {
      setIsValid(false);
      setIsTouched(true);
      return;
    }
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="text">todo:</label>
      <Input
        type="text"
        id="text"
        placeholder="Enter your todo"
        name="text"
        value={text}
        onChange={onChangeHandler}
      />
      <Button>Add</Button>
      {isTouched && !isValid && (
        <p>Please Enter Todo , it has to be longer than 3 letters</p>
      )}
    </form>
  );
};
