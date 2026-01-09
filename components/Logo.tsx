
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  // Added onClick prop to handle click events on the logo, as used in App.tsx
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, onClick }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} onClick={onClick}>
      {/* Recreated the triangle/folded ribbon icon from the image */}
      <svg viewBox="0 0 100 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50 L35 15 L50 30 L15 60 Z" fill="#8cc63f" />
        <path d="M35 15 L55 0 L70 30 L50 30 Z" fill="#7ab800" /> 
        <path d="M50 30 L70 30 L60 50 Z" fill="#6a9e00" opacity="0.8" />
      </svg>
      
      {showText && (
        <span className="font-max font-normal text-4xl tracking-wide lowercase text-transparent bg-clip-text bg-gradient-to-br from-[#8cc63f] to-[#7ab800]">
          amplia
        </span>
      )}
    </div>
  );
};
