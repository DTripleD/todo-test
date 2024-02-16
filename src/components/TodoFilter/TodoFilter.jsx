import PropTypes from "prop-types";
import DateSelect from "../DateSelect/DateSelect";
import ProgressSelect from "../ProgressSelect/ProgressSelect";

import css from "./TodoFilter.module.css";

export const TodoFilter = ({
  setSearchParams,
  handleFilter,
  searchParams,
  handleReset,
}) => {
  return (
    <form className={css.todo_form} onSubmit={handleFilter}>
      <input
        type="text"
        value={searchParams.job}
        onChange={(e) =>
          setSearchParams((prev) => ({ ...prev, job: e.target.value }))
        }
        className={css.todo_input}
        placeholder="Поиск по названию задачи"
      />
      <input
        type="text"
        value={searchParams.descr}
        onChange={(e) =>
          setSearchParams((prev) => ({ ...prev, descr: e.target.value }))
        }
        className={css.todo_input}
        placeholder="Поиск по имени владельца задачи"
      />
      <input
        type="text"
        value={searchParams.user}
        onChange={(e) =>
          setSearchParams((prev) => ({ ...prev, user: e.target.value }))
        }
        className={css.todo_input}
        placeholder="Имя владельца задачи"
      />
      <DateSelect
        date={searchParams.date}
        setDate={setSearchParams}
        type="filter"
        id="time-wrapper-filter"
      />
      <ProgressSelect
        status={searchParams.status}
        setStatus={setSearchParams}
        type="filter"
      />
      <div className={css.buttons_wrapper}>
        <button type="submit" className={css.todo_btn}>
          Найти
        </button>
        <button type="reset" className={css.todo_btn} onClick={handleReset}>
          Очистить
        </button>
      </div>
    </form>
  );
};

TodoFilter.propTypes = {
  setSearchParams: PropTypes.func,
  handleFilter: PropTypes.func,
  searchParams: PropTypes.object,
  handleReset: PropTypes.func,
};
