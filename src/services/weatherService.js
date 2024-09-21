export const fetchWeatherData = async (city) => {
    const apiKey = "dd8a730718ec8d66e66a9882bc3b9c64";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  
  export const fetchFiveDayForecast = async (city) => {
    const apiKey ="dd8a730718ec8d66e66a9882bc3b9c64";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  