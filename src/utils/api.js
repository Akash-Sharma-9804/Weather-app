import axios from 'axios';

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '1103f55ba556cef9f6202f9178cccdcd';
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY || 'mw3msTCYJB1K-R-s4cwP_J7hm3nN1TMuZBGJBdRe5OU';

export const fetchWeather = async (city) => {
  const [weatherRes, forecastRes] = await Promise.all([
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
    ),
    axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
    ),
  ]);

  const fullForecast = forecastRes.data.list;
  // Daily forecast: pick one entry per day (every 8th = ~24h apart)
  const dailyForecast = fullForecast.filter((_, idx) => idx % 8 === 0);

  return {
    current: weatherRes.data,
    forecast: fullForecast,
    dailyForecast: dailyForecast,
  };
};

export const fetchCityImages = async (city) => {
  const [cityRes, monumentRes] = await Promise.all([
    axios.get(
      `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}&per_page=1`
    ),
    axios.get(
      `https://api.unsplash.com/search/photos?query=${city}+monument&client_id=${UNSPLASH_API_KEY}&per_page=1`
    ),
  ]);

  return {
    city: cityRes.data.results[0]?.urls?.regular || null,
    monument: monumentRes.data.results[0]?.urls?.regular || null,
  };
};
