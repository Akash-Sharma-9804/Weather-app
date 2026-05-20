import { getWeatherIcon, formatDate } from '../utils/weatherIcons.jsx';
import { FiDroplet } from 'react-icons/fi';

const ForecastGrid = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="w-full animate-slide-up">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-black/10"></div>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-800 font-semibold">
          5-Day Forecast
        </span>
        <div className="h-px flex-1 bg-black/10"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {forecast.map((day, idx) => (
          <div
            key={idx}
            className="glass rounded-2xl p-5 text-center hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="text-xs uppercase tracking-wider text-slate-800 font-medium mb-3">
              {formatDate(day.dt_txt)}
            </div>

            <div className="flex justify-center my-3">
              {getWeatherIcon(day.weather[0]?.icon, 48)}
            </div>

            <div className="text-lg font-semibold text-slate-800 mb-1">
              {Math.round(day.main?.temp)}°
            </div>

            <div className="text-xs text-slate-800 capitalize mb-2 truncate px-1">
              {day.weather[0]?.description}
            </div>

            <div className="flex justify-center items-center gap-3 text-xs text-slate-800">
              <span>H: {Math.round(day.main?.temp_max)}°</span>
              <span>L: {Math.round(day.main?.temp_min)}°</span>
            </div>

            {day.pop > 0 && (
              <div className="flex items-center justify-center gap-1 mt-2 text-blue-500">
                <FiDroplet className="text-[10px]" />
                <span className="text-[10px]">{Math.round(day.pop * 100)}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastGrid;
