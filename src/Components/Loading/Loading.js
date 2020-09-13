import React from "react";
import "./Loader.css";

export default () => (
  <div className="Loader">
    <div className="lds-heart">
      <div></div>
    </div>
    <div className="LoaderText">Loading data...</div>
  </div>
);
