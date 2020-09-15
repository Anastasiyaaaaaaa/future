import React, { useState } from "react";

export default (props) => {
  const [value, setValue] = useState("");
  
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="tableFilter">
      <div className="input-group ">
        <div className="input-group-prepend">
          <button
            className="btn btn-secondary"
            onClick={() => props.onSearch(value)}
          >
            Найти
          </button>
        </div>
        <input
          type="text"
          placeholder="Введите текст для поиска"
          className="form-control"
          onChange={valueChangeHandler}
          value={value}
        />{" "}
      </div>
    </div>
  );
};
