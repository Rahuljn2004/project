import React from 'react'
import { useEffect, useState } from 'react';
import'./Days.css';

const Days = props => {
const [weatherData, setWeatherData] = useState([]);
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q= mathura &units=Metric&appid=${'639525f1fa05a0cb9f7fbccbcc30abcd'}`
          );

          if (response.ok) {
            const data = await response.json();
            // Assuming the API response structure, modify accordingly
            setWeatherData(data.list);
          } else {
            console.error('Failed to fetch weather data');
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
      fetchWeatherData();
    }, []);





  return (
    <div className='Main-section'>
      {weatherData.length > 0 && (
        <>
      <h1> weather of different time</h1>
      <div className="day12-data">

      <div className="day1"> 
        <h3>{weatherData[0].dt_txt}</h3>
        <h3>{weatherData[0].main.temp}°C</h3>
      </div>

      <div className="day2">
        <h3>{weatherData[1].dt_txt}</h3>
        <h3>{weatherData[1].main.temp}°C</h3>
      </div>

      </div>
      <div className="day34-data">

      <div className="day3">
        <h3>{weatherData[2].dt_txt}</h3>
        <h3>{weatherData[2].main.temp}°C</h3>
      </div>

      <div className="day4">
        <h3>{weatherData[3].dt_txt}</h3>
        <h3>{weatherData[3].main.temp}°C</h3>
      </div>

      </div>

      <div className="day5-data">

      <div className="day5">
        <h3>{weatherData[4].dt_txt}</h3>
        <h3>{weatherData[4].main.temp}°C</h3>
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default Days
