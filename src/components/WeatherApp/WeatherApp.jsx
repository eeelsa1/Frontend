import React, { useState, useEffect, useCallback } from "react";
import "./WeatherApp.css";
import searchIcon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {
  let api_key = "7687a140640e6ced2ed0c8326eb7bb02";
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wicon, setWicon] = useState();

  const search = useCallback(async () => {
    setLoading(true);
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      setLoading(false);
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);

    // 设置天气图标
    if (data.weather && data.weather.length > 0) {
      const iconCode = data.weather[0].icon;
      if (iconCode === "01d" || iconCode === "01n") {
        setWicon(clear_icon);
      } else if (iconCode === "02d" || iconCode === "02n") {
        setWicon(cloud_icon);
      } else if (iconCode === "03d" || iconCode === "03n") {
        setWicon(drizzle_icon);
      } else if (iconCode === "04d" || iconCode === "04n") {
        setWicon(drizzle_icon);
      } else if (iconCode === "09d" || iconCode === "09n") {
        setWicon(rain_icon);
      } else if (iconCode === "10d" || iconCode === "10n") {
        setWicon(rain_icon);
      } else if (iconCode === "13d" || iconCode === "13n") {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }
    }
  }, []); // 如果search函数依赖其他状态或props，需要将它们加入此数组

  useEffect(() => {
    search(); // 组件挂载后执行一次搜索
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="cityInput"
            placeholder="Search the city"
          />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="weather-img">
          <img src={wicon} alt="" />
        </div>

        {weather ? (
          <>
            <div className="weather-temp">
              {Math.floor(weather.main.temp)}°C
            </div>
            <div className="weather-location">{weather.name}</div>
            <div className="data-container">
              <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                  <div className="humidity-percent">
                    {weather.main.humidity}%
                  </div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                  <div className="wind-rate">
                    {Math.floor(weather.wind.speed)}km/h
                  </div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>No weather data available.</div>
        )}
      </div>
      <div></div>
    </>
  );
};

export default WeatherApp;
