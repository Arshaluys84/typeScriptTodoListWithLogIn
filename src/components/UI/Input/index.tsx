import React, { ChangeEvent } from "react";
import "./index.css";

export const Input: React.FC<{
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, id, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
