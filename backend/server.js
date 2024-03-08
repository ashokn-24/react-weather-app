import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/weather", async (req, res) => {
  res.send("Server");
  try {
    const { location } = req.query;
    const WEATHER_API_KEY = process.env.API_KEY;
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=5&aqi=yes&alerts=no`;
    const response = await axios.get(API_URL);
    const { current, forecast } = response.data;
    console.log(response.data);
    res.json({
      currentWeather: current,
      forecast: forecast.forecastday,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(` server listening on http://localhost:${PORT}`);
});
