import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Result = ({ data }) => {
  if (!data) return null;
  const { main, coord, name, sys, weather } = data;

  let time = 6;

  //   console.log(time);

  let component;
  if (time >= 6 && time < 18) {
    component = <FaSun style={{ color: "#000" }} />;
  } else {
    component = <FaMoon style={{ color: "#000" }} />;
  }

  return (
    <div className="weather-panel">
      {component}
      <p>
        {name}, {sys.country}
      </p>
      <p className="temp-value">{main.temp}°C</p>

      <div className="values-wrapper">
        <p>
          Thermal sensation: <span>{main.feels_like}°C</span>
        </p>
        <p>
          Humidity: <span>{main.humidity}%</span>
        </p>
        <p>
          Weather: <span>{weather[0].description}</span>
        </p>
        <p>
          Latitude: <span>{coord.lat}</span>
        </p>
        <p>
          Longitude: <span>{coord.lon}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
