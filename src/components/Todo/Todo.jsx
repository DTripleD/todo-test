import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import css from "./Todo.module.css";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className={css.todo}>
      <p className={css.incompleted} onClick={() => toggleComplete(task.id)}>
        {task.job}
      </p>

      <p className={css.incompleted} onClick={() => toggleComplete(task.id)}>
        {task.descr}
      </p>
      <p className={css.incompleted} onClick={() => toggleComplete(task.id)}>
        {task.user}
      </p>
      <p className={css.incompleted} onClick={() => toggleComplete(task.id)}>
        {task.date}
      </p>
      <p className={css.incompleted}>{task.status}</p>
      <div className={css.delete_wrapper}>
        <FontAwesomeIcon
          className={css.edit_icon}
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className={css.delete_icon}
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  task: PropTypes.object,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  toggleComplete: PropTypes.func,
};
