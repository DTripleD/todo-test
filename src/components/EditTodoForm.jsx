import { useState } from "react";
import PropTypes from "prop-types";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <label className="incompleted">
        <input type="radio" name="drone" value="Ready" />
        Готова к работе
      </label>
      <label className="incompleted">
        <input type="radio" name="drone" value="InWork" />
        Взята в работу
      </label>
      <label className="incompleted">
        <input type="radio" name="drone" value="Done" />
        Выполнена
      </label>
      <button type="submit" className="todo-btn">
        Сохранить
      </button>
    </form>
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func,
  task: PropTypes.object,
};
