import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch, loading }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto animate-fade-in"
    >
      <div className="glass-strong rounded-2xl flex items-center px-5 py-3 shadow-glow transition-all duration-300 focus-within:shadow-[0_0_30px_rgba(14,165,233,0.15)] focus-within:border-black/10">
        <FiSearch className="text-slate-400 text-xl shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for a city..."
          className="bg-transparent border-none text-slate-800 placeholder-slate-400 text-base ml-3 w-full font-light tracking-wide"
        />
        <button
          type="submit"
          disabled={loading || !value.trim()}
          className="ml-3 px-5 py-2 bg-weather-accent/10 hover:bg-weather-accent/20 text-weather-accent rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
