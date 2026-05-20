import { useState, useCallback } from 'react';
import { fetchWeather, fetchCityImages } from '../utils/api';

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState({ city: null, monument: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (city) => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);
    setImages({ city: null, monument: null });

    try {
      const [weatherData, imageData] = await Promise.all([
        fetchWeather(city),
        fetchCityImages(city).catch(() => ({ city: null, monument: null })),
      ]);

      setData(weatherData);
      setImages(imageData);
    } catch (err) {
      setError('City not found. Please check the spelling and try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, images, loading, error, search };
};
