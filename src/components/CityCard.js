import React from 'react';

const CityCard = ({ city, temperature, condition, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">{city}</h2>
      <p className="text-3xl">{temperature}°C</p>
      <p className="capitalize">{condition}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={condition} />
    </div>
  );
};

export default CityCard;
