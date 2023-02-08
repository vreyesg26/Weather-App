import React from "react";
import '../App.css';

const TodayInfo = ({ precipitation, humidity, wind }) => {
  return (
    <div className="today-info">
      <div className="precipitation">
        {" "}
        <span className="title">PRESIÓN</span>
        <span className="value">{precipitation} hPa</span>
        <div className="clear"></div>
      </div>
      <div className="humidity">
        {" "}
        <span className="title">HUMEDAD</span>
        <span className="value">{humidity}%</span>
        <div className="clear"></div>
      </div>
      <div className="wind">
        {" "}
        <span className="title">VIENTO</span>
        <span className="value">{wind} km/h</span>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default TodayInfo;
