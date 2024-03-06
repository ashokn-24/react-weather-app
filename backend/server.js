import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({ extends: false }));

app.get("/weather", async (req, res) => {
  try {
    const { location } = req.query;

    const WEATHER_API_KEY = process.env.API_URL;
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=5&aqi=yes&alerts=no`;

    const response = await axios.get(API_URL);

    const { current, forecast } = response.data;

    res.json({
      currentWeather: current,
      forecast: forecast.forecastday,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log(" server listening on http://localhost:3000");
});
