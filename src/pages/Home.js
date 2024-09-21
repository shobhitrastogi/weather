import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard';
import ForecastCard from '../components/ForecastCard';
import SearchModal from '../components/SearchModal';
import { fetchWeatherData, fetchFiveDayForecast } from '../services/weatherService';

const Home = () => {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      const data = await fetchWeatherData(cityName);
      const forecastData = await fetchFiveDayForecast(cityName);
      setWeather(data);
      setForecast(forecastData.list.filter((_, index) => index % 8 === 0));
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="p-6">
      <SearchModal onSearch={setCity} />
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div>
          {weather && (
            <CityCard
              city={weather.name}
              temperature={weather.main.temp}
              condition={weather.weather[0].description}
              icon={weather.weather[0].icon}
            />
          )}

          <h3 className="text-2xl font-bold mt-6 mb-4 text-center">5-Day Forecast</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {forecast.map((item, index) => (
              <ForecastCard
                key={index}
                day={new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
                tempHigh={item.main.temp_max}
                tempLow={item.main.temp_min}
                icon={item.weather[0].icon}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
