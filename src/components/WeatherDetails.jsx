import {
  FiDroplet,
  FiWind,
  FiEye,
  FiCloudRain,
  FiThermometer,
  FiCompass,
} from 'react-icons/fi';

const DetailCard = ({ icon: Icon, label, value, unit, sublabel }) => (
  <div className="glass rounded-2xl p-5 hover:bg-white/90 transition-all duration-300 group">
    <div className="flex items-start justify-between mb-3">
      <div className="p-2.5 rounded-xl bg-slate-100/80 group-hover:bg-weather-accent/10 transition-colors duration-300">
        <Icon className="text-weather-accent text-lg" />
      </div>
      <span className="text-xs uppercase tracking-wider text-slate-800 font-semibold mt-1">
        {label}
      </span>
    </div>
    <div className="text-2xl font-light text-slate-800">
      {value}
      <span className="text-sm text-slate-800 ml-1">{unit}</span>
    </div>
    {sublabel && (
      <div className="text-xs text-slate-800 mt-1">{sublabel}</div>
    )}
  </div>
);

const getWindDirection = (deg) => {
  if (deg == null) return '-';
  const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return dirs[Math.round(deg / 22.5) % 16];
};

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const { main, wind, visibility, clouds } = weather;

  const details = [
    {
      icon: FiDroplet,
      label: 'Humidity',
      value: main?.humidity,
      unit: '%',
      sublabel: `Dew point ${Math.round(main?.temp - ((100 - main?.humidity) / 5))}°`,
    },
    {
      icon: FiWind,
      label: 'Wind',
      value: wind?.speed,
      unit: 'm/s',
      sublabel: `Gusts up to ${wind?.gust || wind?.speed} m/s`,
    },
    {
      icon: FiCompass,
      label: 'Direction',
      value: getWindDirection(wind?.deg),
      unit: '',
      sublabel: wind?.deg ? `${wind.deg}°` : '',
    },
    {
      icon: FiEye,
      label: 'Visibility',
      value: visibility ? (visibility / 1000).toFixed(1) : '-',
      unit: 'km',
    },
    {
      icon: FiCloudRain,
      label: 'Cloudiness',
      value: clouds?.all,
      unit: '%',
    },
    {
      icon: FiThermometer,
      label: 'Pressure',
      value: main?.pressure,
      unit: 'hPa',
    },
  ];

  return (
    <div className="w-full animate-slide-up">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-black/10"></div>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-800 font-semibold">
          Weather Details
        </span>
        <div className="h-px flex-1 bg-black/10"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {details.map((detail) => (
          <DetailCard key={detail.label} {...detail} />
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
