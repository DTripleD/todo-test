import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import css from "./ProgressSelect.module.css";

const ProgressSelect = ({ status, setStatus, type = "" }) => {
  const [statusHidden, setStatusHidden] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!statusHidden && !e.target.closest("#select-wrapper")) {
        setStatusHidden(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [statusHidden]);

  return (
    <div
      id="select-wrapper"
      className={css.time_wrapper}
      onClick={() => setStatusHidden((prev) => !prev)}
    >
      <div className={css.custom_select}>
        <p>{status || "Статус"} </p>
        <FontAwesomeIcon
          className={`${
            statusHidden ? `${css.show_icon} ${css.up}` : css.show_icon
          }`}
          icon={faAngleDown}
        />
      </div>
      <div className={`${css.date_picker} ${statusHidden ? css.hidden : ""}`}>
        <ul>
          <li
            className={css.select_item}
            onClick={() => {
              type === "filter"
                ? setStatus((prev) => ({
                    ...prev,
                    status: "Готова к работе",
                  }))
                : setStatus("Готова к работе");
            }}
          >
            Готова к работе
          </li>
          <li
            className={css.select_item}
            onClick={() => {
              type === "filter"
                ? setStatus((prev) => ({
                    ...prev,
                    status: "Взята в работу",
                  }))
                : setStatus("Взята в работу");
            }}
          >
            Взята в работу
          </li>
          <li
            className={css.select_item}
            onClick={() => {
              type === "filter"
                ? setStatus((prev) => ({
                    ...prev,
                    status: "Выполнена",
                  }))
                : setStatus("Выполнена");
            }}
          >
            Выполнена
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressSelect;

ProgressSelect.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
  type: PropTypes.string,
};
