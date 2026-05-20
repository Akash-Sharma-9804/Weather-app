import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiRain,
  WiShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiSmoke,
  WiDust,
  WiDayHaze,
  WiNightClear,
  WiNightCloudy,
  WiNightAltCloudy,
} from 'react-icons/wi';

export const getWeatherIcon = (iconCode, size = 64) => {
  const isNight = iconCode && iconCode.endsWith('n');

  if (!iconCode) return <WiDaySunny size={size} />;

  switch (iconCode) {
    case '01d':
      return <WiDaySunny size={size} className="text-yellow-400" />;
    case '01n':
      return <WiNightClear size={size} className="text-slate-300" />;
    case '02d':
      return <WiCloud size={size} className="text-slate-300" />;
    case '02n':
      return <WiNightCloudy size={size} className="text-slate-400" />;
    case '03d':
    case '03n':
      return <WiCloudy size={size} className="text-slate-400" />;
    case '04d':
    case '04n':
      return <WiCloudy size={size} className="text-slate-500" />;
    case '09d':
    case '09n':
      return <WiShowers size={size} className="text-blue-400" />;
    case '10d':
    case '10n':
      return <WiRain size={size} className="text-blue-500" />;
    case '11d':
    case '11n':
      return <WiThunderstorm size={size} className="text-purple-400" />;
    case '13d':
    case '13n':
      return <WiSnow size={size} className="text-cyan-200" />;
    case '50d':
    case '50n':
      return <WiFog size={size} className="text-slate-400" />;
    default:
      return isNight ? (
        <WiNightAltCloudy size={size} className="text-slate-400" />
      ) : (
        <WiDaySunny size={size} className="text-yellow-400" />
      );
  }
};

export const getWeatherBackground = (condition) => {
  if (!condition) {
    return {
      gradient: 'from-sky-100 via-blue-50 to-white',
      image: "url('./Generic%20pleasant%20sky.jpg')",
    };
  }

  const c = condition.toLowerCase();

  if (c.includes('rain') || c.includes('drizzle')) {
    return {
      gradient: 'from-slate-200 via-blue-100 to-slate-100',
      image: "url('/Rain-Drizzle.jpg')",
    };
  }
  if (c.includes('thunder') || c.includes('storm')) {
    return {
      gradient: 'from-slate-200 via-purple-100 to-slate-100',
      image: "url('/Thunderstorm.jpg')",
    };
  }
  if (c.includes('snow') || c.includes('ice') || c.includes('sleet')) {
    return {
      gradient: 'from-blue-50 via-slate-100 to-white',
      image: "url('/Snow-Ice.jpg')",
    };
  }
  if (c.includes('mist') || c.includes('fog')) {
    return {
      gradient: 'from-slate-200 via-slate-100 to-slate-200',
      image: "url('/Mist-%20Fog.jpg')",
    };
  }
  if (c.includes('smoke') || c.includes('haze') || c.includes('dust')) {
    return {
      gradient: 'from-stone-200 via-amber-100 to-slate-100',
      image: "url('/Smoke%20-%20Dust.jpg')",
    };
  }
  if (c.includes('cloud')) {
    return {
      gradient: 'from-slate-200 via-slate-100 to-slate-200',
      image: "url('/Clouds-Overcast.jpg')",
    };
  }
  if (c.includes('clear')) {
    return {
      gradient: 'from-sky-100 via-blue-50 to-white',
      image: "url('/Clear-Sunny.jpg')",
    };
  }

  return {
    gradient: 'from-sky-100 via-blue-50 to-white',
    image: "url('./Generic%20pleasant%20sky.jpg')",
  };
};

export const formatDate = (dateString) => {
  // OpenWeather dt_txt is UTC — append Z for correct parsing
  const date = new Date(dateString + 'Z');
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const formatTime = (timestamp) => {
  if (!timestamp) return '--:--';
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatHour = (dateString) => {
  // OpenWeather dt_txt is UTC — append Z for correct parsing
  const date = new Date(dateString + 'Z');
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
  });
};
