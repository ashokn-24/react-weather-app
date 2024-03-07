// FetchApi.jsx

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PushSpinner } from "react-spinners-kit";

function FetchApi() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("Celsius");

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:3000/weather?location=${city}`
      );

      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === "Celsius" ? "Fahrenheit" : "Celsius");
  };

  const convertTemperature = (temp) => {
    if (unit === "Celsius") {
      return temp;
    } else {
      return (temp * 9) / 5 + 32;
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="container my-5"
    >
      <div className="text-center text-light my-5" id="weather">
        <h1>Check Weather</h1>
        <div className="p-1">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "10%",
            }}
            className="btn btn-outline-light mx-4"
            onClick={fetchWeatherData}
          >
            Get Weather
          </motion.button>
        </div>
        {loading && (
          <div className="d-flex justify-content-center">
            <PushSpinner size={30} color="#fff" />
          </div>
        )}
        {weatherData && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <h1>Current Weather in {city}</h1>
            <button
              className="btn btn-outline-light border-rounded"
              onClick={toggleUnit}
            >
              {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
            </button>
            <div>
              <img
                src={weatherData.currentWeather.condition.icon}
                alt="weather-icon"
              />
              <p>{weatherData.currentWeather.condition.text}</p>
            </div>

            <div className="p-1">
              <p>
                Temp: {convertTemperature(weatherData.currentWeather.temp_c)}°
                {unit}
              </p>
              <p>Humidity: {weatherData.currentWeather.humidity}%</p>
              <p>Wind speed: {weatherData.currentWeather.wind_kph}Km/h</p>

              <p>Is Day: {weatherData.currentWeather.is_day ? "Yes" : "No"}</p>
            </div>
            <div className="forecast">
              {weatherData.forecast.map((day, index) => (
                <div className="forecast-card text-dark" key={index}>
                  <div>
                    Date: {day.date} <br />
                    Temperature: {convertTemperature(day.day.avgtemp_c)}°{unit}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default FetchApi;
