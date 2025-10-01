import React from 'react';
import { Sun, Moon, Download, Copy, User } from 'lucide-react';

interface GradientMenuButtonProps {
  title: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  onClick: () => void;
  disabled?: boolean;
}

const GradientMenuButton: React.FC<GradientMenuButtonProps> = ({ 
  title, 
  icon, 
  gradientFrom, 
  gradientTo, 
  onClick, 
  disabled = false 
}) => {
  return (
    <li
      style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
      className={`relative w-[40px] h-[40px] bg-gray-200 shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[120px] hover:shadow-none group cursor-pointer dark:bg-gray-700 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={disabled ? undefined : onClick}
      title={title}
    >
      {/* Gradient background on hover */}
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
      {/* Blur glow */}
      <span className="absolute top-[5px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[8px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

      {/* Icon */}
      <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
        <span className="text-lg text-gray-600 dark:text-gray-300">{icon}</span>
      </span>

      {/* Title */}
      <span className="absolute text-white uppercase tracking-wide text-xs transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
        {title}
      </span>
    </li>
  );
};

interface ToolbarGradientMenuProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onExport: () => void;
  onCopy: () => void;
  onSignIn: () => void;
  hasData: boolean;
}

export default function ToolbarGradientMenu({ 
  isDarkMode, 
  onToggleDarkMode, 
  onExport, 
  onCopy, 
  onSignIn, 
  hasData 
}: ToolbarGradientMenuProps) {
  return (
    <ul className="flex items-center gap-4">
      <GradientMenuButton
        title={isDarkMode ? 'Light' : 'Dark'}
        icon={isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        gradientFrom="#a955ff"
        gradientTo="#ea51ff"
        onClick={onToggleDarkMode}
      />
      
      <GradientMenuButton
        title="Export"
        icon={<Download className="w-4 h-4" />}
        gradientFrom="#56CCF2"
        gradientTo="#2F80ED"
        onClick={onExport}
        disabled={!hasData}
      />
      
      <GradientMenuButton
        title="Copy"
        icon={<Copy className="w-4 h-4" />}
        gradientFrom="#FF9966"
        gradientTo="#FF5E62"
        onClick={onCopy}
        disabled={!hasData}
      />
      
      <button
        onClick={onSignIn}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all"
      >
        <User className="w-4 h-4" />
        <span>Sign In</span>
      </button>
    </ul>
  );
}
