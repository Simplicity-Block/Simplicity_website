// src/components/navigation/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full p-6 z-50 bg-black/10 backdrop-blur-lg border-b border-white/5">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
      <div className="flex items-center space-x-2">
        <div className="text-purple-400 text-2xl font-mono">`{'}'}`</div>
        <span className="text-white text-xl font-bold">Simplicity</span>
      </div>
      <div className="flex items-center gap-8">
        <span className="text-white/80 text-sm">LEARN</span>
        <span className="text-white/80 text-sm">EXPLORE</span>
        <Link to="/wallet" className="text-white/80 text-sm">WALLET</Link>

        <span className="text-white/80 text-sm">COMMUNITY</span>
        <span className="text-white/80 text-sm">RESOURCES</span>
      </div>
    </div>
  </nav>
);

export default Navbar;