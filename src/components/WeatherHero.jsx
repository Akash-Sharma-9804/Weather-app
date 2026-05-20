import { getWeatherIcon, formatTime } from '../utils/weatherIcons.jsx';
import { FiMapPin, FiWind, FiDroplet } from 'react-icons/fi';

const WeatherHero = ({ weather, cityImage }) => {
  if (!weather) return null;

  const { main, name, sys, weather: weatherData, wind } = weather;
  const current = weatherData[0];

  return (
    <div className="w-full animate-slide-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main weather card - spans 7 cols */}
        <div className="lg:col-span-7 glass rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-weather-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-weather-accent/10 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-weather-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-weather-accent text-sm" />
                <span className="text-sm tracking-wide uppercase font-medium text-slate-500">
                  {name}
                </span>
                <span className="text-slate-400 text-xs">{sys?.country}</span>
              </div>
              <span className="text-xs text-slate-400">
                Updated {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
              </span>
            </div>

            <div className="flex items-end gap-8 mb-8">
              <div className="shrink-0 -ml-2">
                {getWeatherIcon(current?.icon, 96)}
              </div>
              <div className="pb-2">
                <div className="text-8xl sm:text-9xl font-extralight tracking-tighter text-gradient leading-none">
                  {Math.round(main?.temp)}
                  <span className="text-5xl align-top text-slate-400 font-light">°</span>
                </div>
                <div className="text-slate-500 text-xl mt-2 capitalize font-light tracking-wide">
                  {current?.description}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-slate-100/80 rounded-xl px-4 py-2.5 flex items-center gap-2 border border-slate-200/60">
                <span className="text-slate-400 text-sm">Feels like</span>
                <span className="text-slate-800 font-medium">{Math.round(main?.feels_like)}°</span>
              </div>
              <div className="bg-slate-100/80 rounded-xl px-4 py-2.5 flex items-center gap-2 border border-slate-200/60">
                <span className="text-slate-400 text-sm">H:</span>
                <span className="text-slate-800 font-medium">{Math.round(main?.temp_max)}°</span>
                <span className="text-slate-400 text-sm ml-1">L:</span>
                <span className="text-slate-800 font-medium">{Math.round(main?.temp_min)}°</span>
              </div>
              <div className="bg-slate-100/80 rounded-xl px-4 py-2.5 flex items-center gap-2 border border-slate-200/60">
                <FiDroplet className="text-blue-500 text-sm" />
                <span className="text-slate-800 font-medium">{main?.humidity}%</span>
              </div>
              <div className="bg-slate-100/80 rounded-xl px-4 py-2.5 flex items-center gap-2 border border-slate-200/60">
                <FiWind className="text-slate-500 text-sm" />
                <span className="text-slate-800 font-medium">{Math.round(wind?.speed)} m/s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - city image + sun info */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* City image */}
          <div className="glass rounded-3xl overflow-hidden relative flex-1 min-h-[200px] group">
            {cityImage ? (
              <>
                <img
                  src={cityImage}
                  alt={`${name} city`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-xs uppercase tracking-widest text-slate-300 mb-1">
                    {name}
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏙️</div>
                  <div className="text-sm">No city image</div>
                </div>
              </div>
            )}
          </div>

          {/* Sun times */}
          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Sunrise</div>
              <div className="text-lg font-light text-slate-800">{formatTime(sys?.sunrise)}</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Sunset</div>
              <div className="text-lg font-light text-slate-800">{formatTime(sys?.sunset)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHero;
