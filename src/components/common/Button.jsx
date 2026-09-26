import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-normal transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#8b263e] text-white hover:bg-[#721e32] shadow-xs',
    secondary: 'bg-[#fce4ec] text-[#3a1d28] hover:bg-[#f8d0de]',
    outline: 'bg-white text-[#3a1d28] border border-[#f5e6ea] hover:bg-[#fff8f6]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}