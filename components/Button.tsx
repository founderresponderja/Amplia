import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-max font-normal transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-amplia-green text-white hover:bg-[#7ab800] hover:shadow-lg focus:ring-amplia-green shadow-sm",
    // Secondary adapts to be light on dark backgrounds
    secondary: "bg-amplia-dark text-white hover:bg-black dark:bg-white dark:text-amplia-dark dark:hover:bg-gray-200 hover:shadow-lg focus:ring-gray-800",
    outline: "bg-transparent border-2 border-amplia-green text-amplia-green hover:bg-amplia-green hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};