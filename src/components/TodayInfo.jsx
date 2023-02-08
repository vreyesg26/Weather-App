import React from "react";
import '../App.css';

const TodayInfo = ({ precipitation, humidity, wind }) => {
  return (
    <div className="today-info">
      <div className="precipitation">
        {" "}
        <span className="title">PRESSURE</span>
        <span className="value">{precipitation} hPa</span>
        <div className="clear"></div>
      </div>
      <div className="humidity">
        {" "}
        <span className="title">HUMIDITY</span>
        <span className="value">{humidity}%</span>
        <div className="clear"></div>
      </div>
      <div className="wind">
        {" "}
        <span className="title">WIND</span>
        <span className="value">{wind} km/h</span>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default TodayInfo;
