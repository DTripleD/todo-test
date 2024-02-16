import { useState } from "react";
import PropTypes from "prop-types";

import DateSelect from "../DateSelect/DateSelect";

import css from "./TodoForm.module.css";

export const TodoForm = ({ addTodo }) => {
  const [job, setJob] = useState("");
  const [descr, setDescr] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (job && descr && user) {
      addTodo(job, descr, user, date);
      clearForm();
    }
  };

  const clearForm = () => {
    setJob("");
    setDescr("");
    setUser("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.todo_form}>
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className={css.todo_input}
        placeholder="Название задачи"
        required
      />
      <input
        type="text"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
        className={css.todo_input}
        placeholder="Описание"
        required
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className={css.todo_input}
        placeholder="Имя владельца задачи"
        required
      />
      <DateSelect date={date} setDate={setDate} id="time-wrapper" />

      <button type="submit" className={css.todo_btn}>
        Добавить
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};
