import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import css from "./DateSelect.module.css";

const DateSelect = ({ date, setDate, type = "" }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!hidden && !e.target.closest("#time-wrapper")) {
        setHidden(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hidden]);

  return (
    <div
      id="time-wrapper"
      className={css.time_wrapper}
      onClick={() => setHidden((prev) => !prev)}
    >
      <div className={css.custom_select}>
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
};
