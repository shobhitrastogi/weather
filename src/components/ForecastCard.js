import React from 'react';

const ForecastCard = ({ day, tempHigh, tempLow, icon }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 text-center">
      <p className="text-lg font-bold">{day}</p>
      <p className="text-sm">High: {tempHigh}°C</p>
      <p className="text-sm">Low: {tempLow}°C</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" />
    </div>
  );
};

export default ForecastCard;
