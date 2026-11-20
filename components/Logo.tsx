import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, onClick }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} onClick={onClick} aria-label="Amplia Solutions">
      <img src="/brand/amplia-symbol.png" alt="" aria-hidden="true" className="h-full w-auto" />
      {showText && (
        <span className="font-max font-normal text-2xl md:text-3xl tracking-wide lowercase whitespace-nowrap text-[#1B1A1C] dark:text-white">
          amplia solutions
        </span>
      )}
    </div>
  );
};
