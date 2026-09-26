import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PlusCircle, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import profile from '../../assets/profile.png';
import { useBreakpoints } from '../../hooks/useBreakpoints';

export default function Navbar() {
  const { isMobile } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentUser = {
    name: 'Aayusha',
    avatar: profile,
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-[#f5e6ea] px-4 sm:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/*  Logo */}
        <Link to="/" onClick={closeMenu}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-normal px-4 py-2 rounded-full bg-[#8b263e]'
                  : 'text-[#3a1d28]/70 hover:text-[#3a1d28] font-normal px-4 py-2 rounded-full transition-colors'
              }
            >
              Dashboard
            </NavLink>


            <NavLink
                to="/create-group"
                className=
                {
                    ({ isActive }) => `group inline-flex items-center gap-0 hover:gap-2 px-3 hover:px-5 py-2 rounded-full text-sm font-normal transition-all duration-300 ease-in-out ${
                     isActive
                        ? 'bg-[#8b263e] text-white shadow-xs'
                        : ' text-[#3a1d28] hover:bg-[#edd8de]'}`
                }>
                <PlusCircle className="w-5 h-5 shrink-0" />
  
            <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out">
                New Group
            </span>
</NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-2.5 pl-2 border-l border-[#f5e6ea] focus:outline-none transition-all ${
                  isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`
              }
            >
              {({ isActive }) => (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className={`w-10 h-10 rounded-full object-cover transition-all ${
                    isActive
                      ? 'border-2 border-[#8b263e] ring-2 ring-[#fce4ec] shadow-xs'
                      : 'border-2 border-[#f5e6ea] hover:border-[#b4647d]'
                  }`}
                />
              )}
            </NavLink>
          </div>
        ) : (
          /* Mobile Controls */
          <div className="flex items-center gap-3">
            <NavLink
              to="/profile"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center focus:outline-none transition-all ${
                  isActive ? 'opacity-100' : 'opacity-80'
                }`
              }
            >
              {({ isActive }) => (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className={`w-9 h-9 rounded-full object-cover transition-all ${
                    isActive
                      ? 'border-2 border-[#8b263e] ring-2 ring-[#fce4ec] shadow-xs'
                      : 'border-2 border-[#f5e6ea]'
                  }`}
                />
              )}
            </NavLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#3a1d28] bg-[#f5e6ea] rounded-full focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && isMenuOpen && (
        <div className="mt-4 pt-4 border-t border-[#f5e6ea] flex flex-col gap-3 px-2">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'text-[#8b263e] font-normal px-4 py-2.5 rounded-2xl bg-[#fce4ec] text-sm'
                : 'text-[#3a1d28]/70 hover:text-[#3a1d28] font-normal px-4 py-2.5 rounded-2xl transition-colors text-sm'
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/create-group"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? 'inline-flex items-center gap-2 bg-[#8b263e] text-white px-4 py-2.5 rounded-2xl text-sm font-normal shadow-xs'
                : 'inline-flex items-center gap-2 bg-[#f5e6ea] text-[#3a1d28] hover:bg-[#edd8de] px-4 py-2.5 rounded-2xl text-sm font-normal transition-colors'
            }
          >
            <PlusCircle className="w-4 h-4" />
            New Group
          </NavLink>
        </div>
      )}
    </nav>
  );
}