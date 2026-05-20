import { FiMapPin, FiSun, FiCloudRain, FiWind } from 'react-icons/fi';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

const popularCities = [
  { name: 'New York', country: 'US', temp: 24, condition: 'Clear', icon: WiDaySunny, color: 'text-yellow-500', bg: 'from-orange-100/50 to-yellow-50' },
  { name: 'London', country: 'GB', temp: 18, condition: 'Cloudy', icon: WiCloudy, color: 'text-slate-500', bg: 'from-slate-200/40 to-slate-100' },
  { name: 'Tokyo', country: 'JP', temp: 22, condition: 'Rain', icon: WiRain, color: 'text-blue-500', bg: 'from-blue-100/50 to-cyan-50' },
  { name: 'Sydney', country: 'AU', temp: 28, condition: 'Clear', icon: WiDaySunny, color: 'text-yellow-500', bg: 'from-orange-100/50 to-yellow-50' },
  { name: 'Paris', country: 'FR', temp: 20, condition: 'Cloudy', icon: WiCloudy, color: 'text-slate-500', bg: 'from-slate-200/40 to-slate-100' },
  { name: 'Dubai', country: 'AE', temp: 38, condition: 'Sunny', icon: WiDaySunny, color: 'text-orange-500', bg: 'from-orange-200/50 to-red-50' },
];

const FloatingOrb = ({ className, delay = '0s' }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-30 animate-pulse-slow ${className}`}
    style={{ animationDelay: delay }}
  />
);

const LandingPage = ({ onSearch }) => {
  return (
    <div className="w-full animate-fade-in">
      {/* Floating background orbs - softer for light theme */}
      <FloatingOrb className="w-96 h-96 bg-sky-200/40 -top-48 -left-48" delay="0s" />
      <FloatingOrb className="w-72 h-72 bg-blue-200/30 top-1/3 -right-36" delay="1s" />
      <FloatingOrb className="w-64 h-64 bg-indigo-200/30 bottom-24 left-1/4" delay="2s" />

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-8 sm:pt-16">
        {/* Main icon animation */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="relative">
            <WiDaySunny size={80} className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-slate-800 mb-4">
          Weather,{' '}
          <span className="text-gradient font-normal">
            reimagined
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-800 font-light max-w-lg mx-auto mb-16 leading-relaxed">
          Real-time forecasts, stunning visuals, and precise insights for any city on Earth.
        </p>

        {/* Weather feature icons row */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-16">
          {[
            { icon: FiSun, label: 'Live Conditions', color: 'text-yellow-500' },
            { icon: FiCloudRain, label: 'Rain Radar', color: 'text-blue-500' },
            { icon: FiWind, label: 'Wind Maps', color: 'text-cyan-500' },
            { icon: FiMapPin, label: 'Global Coverage', color: 'text-weather-accent' },
          ].map((feature) => (
            <div key={feature.label} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-white/60 border border-slate-200/50 flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300 shadow-sm">
                <feature.icon className={`${feature.color} text-xl`} />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-800 uppercase tracking-wider">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Popular Cities */}
        <div className="text-left">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-black/10"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-800 font-semibold">
              Popular Cities
            </span>
            <div className="h-px flex-1 bg-black/10"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {popularCities.map((city) => (
              <button
                key={city.name}
                onClick={() => onSearch(city.name)}
                className={`glass rounded-2xl p-4 text-left hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 group bg-gradient-to-br ${city.bg}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-800">
                    {city.country}
                  </span>
                  <city.icon size={24} className={`${city.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div className="text-lg font-medium text-slate-800">{city.name}</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-light text-slate-800">{city.temp}°</span>
                  <span className="text-xs text-slate-800">{city.condition}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
