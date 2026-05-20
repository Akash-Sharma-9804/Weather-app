import { getWeatherIcon, formatHour } from '../utils/weatherIcons.jsx';
import { FiDroplet } from 'react-icons/fi';

const HourlyForecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  const hourly = forecast.slice(0, 8);

  return (
    <div className="w-full animate-slide-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-black/10"></div>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-800 font-semibold">
          Hourly Forecast
        </span>
        <div className="h-px flex-1 bg-black/10"></div>
      </div>

      <div className="glass rounded-2xl p-3 sm:p-4 overflow-hidden">
        <div className="flex w-full">
          {hourly.map((hour, idx) => (
            <div
              key={idx}
              className={`flex-1 flex flex-col items-center min-w-[70px] sm:min-w-0 px-1 sm:px-2 py-3 rounded-xl transition-colors duration-200 ${
                idx === 0
                  ? 'bg-slate-100/80'
                  : 'hover:bg-slate-50'
              }`}
            >
              <span className={`text-xs mb-2 ${idx === 0 ? 'text-weather-accent font-semibold' : 'text-slate-800'}`}>
                {idx === 0 ? 'Now' : formatHour(hour.dt_txt)}
              </span>

              <div className="my-1">
                {getWeatherIcon(hour.weather[0]?.icon, 32)}
              </div>

              <span className="text-sm font-semibold text-slate-800 mt-1">
                {Math.round(hour.main?.temp)}°
              </span>

              {hour.pop > 0 && (
                <div className="flex items-center gap-0.5 mt-1">
                  <FiDroplet className="text-blue-500 text-[10px]" />
                  <span className="text-[10px] text-blue-500">
                    {Math.round(hour.pop * 100)}%
                  </span>
                </div>
              )}

              <span className="text-[10px] text-slate-800 mt-0.5">
                {hour.rain ? `${hour.rain['3h']}mm` : ' '}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
