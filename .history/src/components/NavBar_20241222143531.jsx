import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure this path is correct

const Navbar = () => (
  <nav className="fixed w-full p-6 z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Simplicity Logo" className="h-8 w-8" /> {/* Adjust size as needed */}
        <Link to="/" className="text-white text-xl font-bold">Simplicity</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link to="/docs" className="text-white/80 text-sm">How it Works?</Link>
        <Link to="/downloads" className="text-white/80 text-sm">Node</Link>
        <Link to="/wallet" className="text-white/80 text-sm">Wallet</Link>
        <Link to="/roadmap" className="text-white/80 text-sm">Roadmap</Link>
        <Link to="/resources" className="text-white/80 text-sm">Resources</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
