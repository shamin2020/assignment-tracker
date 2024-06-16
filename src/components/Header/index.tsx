import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState, ChangeEvent, FormEvent } from "react";

type HeaderProps = {
  addAssignment: (title: string) => void;
};

export function Header({ addAssignment }: HeaderProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addAssignment(inputValue);
      setInputValue("");
    }
  };

  const isButtonDisabled = inputValue.trim() === "";
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isButtonDisabled}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
