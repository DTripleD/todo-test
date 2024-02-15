import { useState } from "react";
import PropTypes from "prop-types";

import DateSelect from "../DateSelect/DateSelect";
import ProgressSelect from "../ProgressSelect/ProgressSelect";

import css from "./EditTodoForm.module.css";

export const EditTodoForm = ({ editTodo, task }) => {
  const [job, setJob] = useState(task.job);
  const [descr, setDescr] = useState(task.descr);
  const [user, setUser] = useState(task.user);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(job, descr, user, date, status, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className={`${css.todo_form} ${css.edit}`}>
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className={css.todo_input}
        placeholder="Update task"
      />
      <input
        type="text"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
        className={css.todo_input}
        placeholder="Update task"
      />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className={css.todo_input}
        placeholder="Update task"
      />
      <DateSelect date={date} setDate={setDate} />

      <ProgressSelect status={status} setStatus={setStatus} />

      <button type="submit" className={css.todo_btn}>
        Сохранить
      </button>
    </form>
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func,
  task: PropTypes.object,
};
