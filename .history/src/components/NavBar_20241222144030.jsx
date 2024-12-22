import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure this path is correct

const Navbar = () => (
  <nav className="fixed w-full p-6 z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Simplicity Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        <Link to="/" className="text-white text-xl font-bold">Simplicity</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex items-center">
        <button id="menu-toggle" aria-label="Open Menu" className="text-white focus:outline-none">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/docs" className="text-white/80 text-sm">How it Works?</Link>
        <Link to="/downloads" className="text-white/80 text-sm">Node</Link>
        <Link to="/wallet" className="text-white/80 text-sm">Wallet</Link>
        <Link to="/roadmap" className="text-white/80 text-sm">Roadmap</Link>
        <Link to="/resources" className="text-white/80 text-sm">Resources</Link>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden flex-col items-start gap-4 sm:hidden fixed top-16 left-0 w-full bg-black/90 text-white p-4 border-t border-white/10">
        <Link to="/docs" className="text-white/80 text-sm">How it Works?</Link>
        <Link to="/downloads" className="text-white/80 text-sm">Node</Link>
        <Link to="/wallet" className="text-white/80 text-sm">Wallet</Link>
        <Link to="/roadmap" className="text-white/80 text-sm">Roadmap</Link>
        <Link to="/resources" className="text-white/80 text-sm">Resources</Link>
      </div>
    </div>

    <script>
      {`
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      `}
    </script>
  </nav>
);

export default Navbar;
