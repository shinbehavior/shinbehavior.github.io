import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ease-spring">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' 
          ? 'from-slate-600 via-slate-700 to-slate-800' 
          : 'from-yellow-300 via-orange-300 to-amber-400'} 
          opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        <div className="relative z-10 transform transition-all duration-500">
          {theme === 'dark' ? (
            <MoonIcon className="w-6 h-6 text-slate-200 transform rotate-0 transition-transform duration-500 group-hover:rotate-180" />
          ) : (
            <SunIcon className="w-6 h-6 text-gray-800 transform rotate-0 transition-transform duration-500 group-hover:rotate-180" />
          )}
        </div>
      </div>
    </button>
  );
};