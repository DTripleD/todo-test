import { useState, useEffect } from "react";
import { TodoForm } from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Todo/Todo";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import { TodoFilter } from "../TodoFilter/TodoFilter";

import css from "./TodoWrapper.module.css";

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const [searchParams, setSearchParams] = useState({
    job: "",
    descr: "",
    user: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const handleReset = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
    setSearchParams({
      job: "",
      descr: "",
      user: "",
      date: "",
      status: "",
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const filteredTodos = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => {
        const jobMatch = todo.job
          .toLowerCase()
          .includes(searchParams?.job.toLowerCase());

        const descrMatch = todo.descr
          .toLowerCase()
          .includes(searchParams?.descr.toLowerCase());
        const userMatch = todo.user
          .toLowerCase()
          .includes(searchParams?.user.toLowerCase());
        const dateMatch = todo.date
          .toLowerCase()
          .includes(searchParams?.date.toLowerCase());
        const statusMatch = todo.status
          .toLowerCase()
          .includes(searchParams?.status.toLowerCase());

        return jobMatch && descrMatch && userMatch && dateMatch && statusMatch;
      }
    );

    setTodos(filteredTodos);
  };

  const addTodo = (job, descr, user, date) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        job,
        descr,
        user,
        date: date === "" ? "Без срока" : date,
        status: "Готова к работе",
        isEditing: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (job, descr, user, date, status, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            job,
            descr,
            user,
            date,
            status,
            isEditing: !todo.isEditing,
          }
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className={css.todo_wrapper}>
      <h1>Добавить задачу</h1>
      <TodoForm addTodo={addTodo} />
      <h1>Фильтр</h1>
      <TodoFilter
        setSearchParams={setSearchParams}
        handleFilter={handleFilter}
        searchParams={searchParams}
        handleReset={handleReset}
      />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
