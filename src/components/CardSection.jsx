import React from "react";
import '../App.css';
import { HiChevronDoubleUp, HiChevronDoubleDown, HiOutlineFire } from 'react-icons/hi'

const CardSection = ({ feels, min, max }) => {
  return (
    <div className="week-list">
      <li className="active">
        <HiOutlineFire className="day-icon"/>
        <span className="day-name">Sensación térmica</span>
        <span className="day-temp">{feels}°C</span>
      </li>
      <li>
        <HiChevronDoubleDown className="day-icon"/>
        <span className="day-name">Temperatura mínima</span>
        <span className="day-temp">{min}°C</span>
      </li>
      <li>
        <HiChevronDoubleUp className="day-icon"/>
        <span className="day-name">Temperatura máxima</span>
        <span className="day-temp">{max}°C</span>
      </li>
      <div className="clear"></div>
    </div>
  );
};

export default CardSection;
