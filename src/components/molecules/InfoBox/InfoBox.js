import "./info-box.scss";
import React from "react";

const InfoBox = ({ title, children }) => (
  <div className="info-box">
    <p className="info-box__title">{title}</p>
    {children}
  </div>
);

export default InfoBox;
