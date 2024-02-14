import { useState } from "react";

export const TodoFilter = () => {
  const [value, setValue] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (value) {
  //       addTodo(value);
  //       setValue("");
  //     }
  //   };

  return (
    <form className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Поиск по названию задачи"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Поиск по имени владельца задачи"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Дедлайн"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Статус"
      />
      <button type="submit" className="todo-btn">
        Найти
      </button>
    </form>
  );
};
