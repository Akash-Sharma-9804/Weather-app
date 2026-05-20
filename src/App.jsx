import { useWeather } from './hooks/useWeather';
import { getWeatherBackground } from './utils/weatherIcons.jsx';
import SearchBar from './components/SearchBar';
import WeatherHero from './components/WeatherHero';
import HourlyForecast from './components/HourlyForecast';
import WeatherDetails from './components/WeatherDetails';
import ForecastGrid from './components/ForecastGrid';
import LoadingSkeleton from './components/LoadingSkeleton';
import LandingPage from './components/LandingPage';
import { FiCloudOff } from 'react-icons/fi';

function App() {
  const { data, images, loading, error, search } = useWeather();

  const bg = getWeatherBackground(data?.current?.weather?.[0]?.main);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* === DYNAMIC WEATHER BACKGROUND === */}

      {/* 1. Weather image fills screen and cross-fades on change */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: bg.image }}
      />

      {/* 2. Light blur so image looks soft but still visible */}
      <div className="fixed inset-0  "></div>

      {/* 3. Very light white wash so cards stay readable */}
      <div className="fixed inset-0 bg-white/30"></div>

      {/* 3. Weather-condition color tint */}
      <div
        className={`fixed inset-0 bg-gradient-to-br ${bg.gradient} opacity-30`}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        <header className="mb-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/Weather.jfif"
                  alt="Weather-live"
                  className="w-9 h-9 rounded-xl object-cover shadow-sm"
                />
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  Weather-live
                </h1>
              </div>
              <div className="text-xs text-slate-500 hidden sm:block">
                Real-time weather insights
              </div>
            </div>

            <SearchBar onSearch={search} loading={loading} />
          </div>
        </header>

        <main className="flex-1 w-full max-w-6xl mx-auto">
          {loading && <LoadingSkeleton />}

          {!loading && error && (
            <div className="glass rounded-2xl p-12 text-center animate-fade-in mt-12">
              <FiCloudOff className="text-5xl text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg text-slate-800 font-medium mb-2">Something went wrong</h3>
              <p className="text-slate-500">{error}</p>
            </div>
          )}

          {!loading && !error && !data && (
            <LandingPage onSearch={search} />
          )}

          {data && (
            <div className="space-y-5">
              <WeatherHero
                weather={data.current}
                cityImage={images.city}
              />
              <HourlyForecast forecast={data.forecast} />
              <WeatherDetails weather={data.current} />
              <ForecastGrid forecast={data.dailyForecast} />
            </div>
          )}
        </main>

        <footer className="mt-10 text-center pb-4">
          <p className="text-xs text-slate-500 mb-2">
            Created by Akash
          </p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a
              href="https://github.com/Akash-Sharma-9804/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-weather-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="text-slate-300">·</span>
            <a
              href="https://akash-sharma-9804.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-weather-accent transition-colors duration-200"
            >
              Portfolio
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
