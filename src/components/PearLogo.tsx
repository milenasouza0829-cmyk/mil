import React from 'react';

interface PearLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const PearLogo: React.FC<PearLogoProps> = ({
  className = 'text-white',
  size = 28,
  showWordmark = true,
  wordmarkClassName = 'text-xl font-bold tracking-tight text-white font-["Outfit",sans-serif]',
}) => {
  return (
    <div id="pear-brand-logo-container" className="inline-flex items-center gap-2.5 select-none cursor-pointer">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          width={size}
          height={size * 1.15}
          viewBox="0 0 40 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          {/* Subtle pear leaf */}
          <path
            d="M 23 4 C 23 4 29 2 31 7 C 32 10 28 14 22 13 C 21 11 21.5 6 23 4 Z"
            fill="currentColor"
            opacity="0.9"
          />
          {/* Stylized Pear Body with subtle clean facet */}
          <path
            d="M 20 14 C 24.5 14 26.5 17.5 28 21.5 C 29.5 25.5 35 28.5 35 35 C 35 41 29 45 20 45 C 11 45 5 41 5 35 C 5 28.5 10.5 25.5 12 21.5 C 13.5 17.5 15.5 14 20 14 Z"
            fill="currentColor"
          />
          {/* Inner luxury light reflection arc */}
          <path
            d="M 12 28 C 10 32 10 36 12 39"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {showWordmark && (
        <span className={wordmarkClassName}>
          pear
          <span className="text-[#c3e88d] font-normal ml-0.5 text-xs tracking-widest uppercase">.</span>
        </span>
      )}
    </div>
  );
};
