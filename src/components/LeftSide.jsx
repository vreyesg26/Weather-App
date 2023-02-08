import React from "react";
import '../App.css';

const LeftSide = ({ icon, temp, desc, day, location, date }) => {
  return (
    <div className="weather-side">
      <div className="weather-gradient"></div>
      <div className="date-container">
        <h2 className="date-dayname">{day}</h2>
        <span className="date-day">{date}</span>
        <i className="location-icon" data-feather="map-pin"></i>
        <span className="location">{location}</span>
      </div>
      <div className="weather-container">
        <i className="weather-icon" data-feather="sun"></i>
        <img className="weather-temp" src={icon} />
        <h1 className="weather-temp">{temp}°C</h1>
        <h3 className="weather-desc">{desc}</h3>
      </div>
    </div>
  );
};

export default LeftSide;
