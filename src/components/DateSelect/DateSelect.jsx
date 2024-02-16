import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import css from "./DateSelect.module.css";

const DateSelect = ({ date, setDate, type = "", id }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!hidden && !e.target.closest(`#${id}`)) {
        setHidden(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hidden, id]);

  return (
    <div id={id} className={css.time_wrapper}>
      <div
        className={css.custom_select}
        onClick={() => setHidden((prev) => !prev)}
      >
        <p>{date || "Крайний срок сдачи"}</p>
        <FontAwesomeIcon
          className={`${hidden ? `${css.show_icon} ${css.up}` : css.show_icon}`}
          icon={faAngleDown}
        />
      </div>
      <div className={`${css.date_picker} ${hidden ? css.hidden : ""}`}>
        <DayPicker
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            type === "filter"
              ? setDate((prev) => ({
                  ...prev,
                  date: format(selectedDate, "dd.MM.yyyy"),
                }))
              : setDate(format(selectedDate, "dd.MM.yyyy"));
          }}
        />
      </div>
    </div>
  );
};

export default DateSelect;

DateSelect.propTypes = {
  date: PropTypes.string,
  setDate: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
};
