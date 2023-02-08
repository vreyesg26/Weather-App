import "./App.css";
import { useEffect, useState } from "react";
import { LeftSide, CardSection, TodayInfo } from "./components";
import _ from "lodash";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [dateData, setDateData] = useState({});
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`;

  const getAPIData = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        city ? city : "Tegucigalpa"
      }&appid=${import.meta.env.VITE_APP_API_URL}&units=metric`
    );
    const weather = await data.json();

    setWeatherData({
      name: weather.name,
      iconCode: weather.weather[0].icon,
      temp: parseInt(weather.main.temp),
      desc: _.capitalize(weather.weather[0].description),
      pressure: weather.main.pressure,
      humidity: weather.main.humidity,
      speed: weather.wind.speed,
      feels: parseInt(weather.main.feels_like),
      min: parseInt(weather.main.temp_min),
      max: parseInt(weather.main.temp_max),
      country: weather.sys.country,
    });

    console.log(weather);
  };

  const currentDate = () => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let fecha = new Date();
    const completeDate =
      fecha.getDate() +
      " of " +
      months[fecha.getMonth()] +
      " " +
      fecha.getFullYear();
    setDateData({
      complete: completeDate,
      day: days[fecha.getDay() - 1],
    });
  };

  useEffect(() => {
    getAPIData();
    currentDate();
  }, [city]);

  return (
    <div className="App">
      <LeftSide
        day={dateData.day}
        date={dateData.complete}
        location={weatherData.name}
        icon={iconUrl}
        temp={weatherData.temp}
        desc={weatherData.desc}
      />
      <div className="info-side">
        <div className="today-info-container">
          <TodayInfo
            precipitation={weatherData.pressure}
            humidity={weatherData.humidity}
            wind={weatherData.speed}
          />
        </div>
        <div className="week-container">
          <CardSection
            feels={weatherData.feels}
            min={weatherData.min}
            max={weatherData.max}
          />
        </div>
        <div className="location-container">
          <button
            className="location-button"
            onClick={() => {
              const newCity = window.prompt("Enter the new location");
              newCity ? setCity(newCity) : city;
            }}
          >
            {" "}
            <span>Chage location</span>
          </button>
        </div>
      </div>
      <h1 className="credits">
        Made by <span>Victor Reyes</span> 😎
      </h1>
    </div>
  );
}

export default App;
