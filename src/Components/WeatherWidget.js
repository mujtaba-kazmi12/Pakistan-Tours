import React, { useState, useEffect } from 'react';
const WeatherWidget = ({placeName}) => {
    
    const weather = {
        name: 'Swat',
        condition: 'sunny',
        main: {
          temp: '59', // Fahrenheit
          humidity: '65' // Percentage
        },
        wind: {
          speed: '10' // mph
        }
        
      };
      const getWeatherIcon = (condition) => {
        switch (condition) {
          case 'sunny':
            return '☀️'; // Sunny icon
          case 'cloudy':
            return '☁️'; // Cloudy icon
          case 'rainy':
            return '🌧️'; // Rainy icon
          // Add more conditions as needed
          default:
            return '❓'; // Default icon
        }
      };
  
    return (
        <div className="weather-widget p-6 border rounded-xl shadow-lg bg-gradient-to-r from-blue-300 to-indigo-500 text-white max-w-md mx-auto">
        <h2 className="text-2xl font-bold">{placeName}</h2>
        <div className="weather-icon text-4xl my-2 ">
          {getWeatherIcon(weather.condition)}
        </div>
        <p className="text-lg">Temperature: {weather.main.temp}°F</p>
        <p className="text-lg">Humidity: {weather.main.humidity}%</p>
        <p className="text-lg">Wind Speed: {weather.wind.speed} mph</p>
      </div>
    );
  };

  export default WeatherWidget;
