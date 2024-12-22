import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure this path is correct

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle cleanup when the component unmounts
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#menu-toggle') && !e.target.closest('#mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed w-full p-6 z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Simplicity Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <Link to="/" className="text-white text-xl font-bold">Simplicity</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            id="menu-toggle"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to="/docs" className="text-white/80 text-sm hover:text-white">How it Works?</Link>
          <Link to="/downloads" className="text-white/80 text-sm hover:text-white">Node</Link>
          <Link to="/wallet" className="text-white/80 text-sm hover:text-white">Wallet</Link>
          <Link to="/roadmap" className="text-white/80 text-sm hover:text-white">Roadmap</Link>
          <Link to="/resources" className="text-white/80 text-sm hover:text-white">Resources</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } flex-col items-start gap-4 sm:hidden fixed top-16 left-0 w-full bg-black/90 text-white p-4 border-t border-white/10`}
      >
        <Link to="/docs" className="text-white/80 text-sm hover:text-white">How it Works?</Link>
        <Link to="/downloads" className="text-white/80 text-sm hover:text-white">Node</Link>
        <Link to="/wallet" className="text-white/80 text-sm hover:text-white">Wallet</Link>
        <Link to="/roadmap" className="text-white/80 text-sm hover:text-white">Roadmap</Link>
        <Link to="/resources" className="text-white/80 text-sm hover:text-white">Resources</Link>
      </div>
    </nav>
  );
};

export default Navbar;
