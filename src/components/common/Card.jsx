import React from 'react';

export default function Card({ children, className = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg sm:rounded-xl border border-[#f5e6ea] p-4 sm:p-6 shadow-xs transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}