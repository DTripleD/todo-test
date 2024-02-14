import { useState } from "react";
import PropTypes from "prop-types";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  //   const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Название задачи"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Описание"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Имя владельца задачи"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Крайний срок сдачи"
      />
      <button type="submit" className="todo-btn">
        Добавить
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};
