import React from "react";
import "./SelectionButtons.css";
export default (props) => {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const bigUrl   = `http://www.filltext.com/?rows=901&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div className="userChoise">
      <div className="info"> Выберите набор данных: </div>
      <div className="mainButtons">
        <button
          onClick={() => props.onSelect(smallUrl)}
          className="btn btn-outline-warning"
        >
          Маленькая таблица
        </button>
        <button
          onClick={() => props.onSelect(bigUrl)}
          className="btn btn-outline-info"
        >
           Большая таблица
        </button>
      </div>
    </div>
  );
};
