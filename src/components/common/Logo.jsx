import React from 'react';
import logoImage from '../../assets/favicon.svg';   
export default function Logo({ className = "w-8 h-8" }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img 
        src={logoImage}
        alt="Expense Splitter Logo" 
        className={`${className} object-contain`}
      />
      
      <span className="text-md font-semibold tracking-tight text-[#3a1d28]">
        Split<span className="text-[#8b263e]">Wise</span>
      </span>
    </div>
  );
}