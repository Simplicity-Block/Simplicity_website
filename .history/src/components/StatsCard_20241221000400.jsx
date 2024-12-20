// src/components/sections/StatCards.jsx
import React from 'react';
import { BookOpen, Code2, Blocks } from 'lucide-react';

const StatCards = () => (
  <div className="grid grid-cols-1 gap-6">
    <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 transform hover:scale-105 transition-all duration-500">
      <div className="text-7xl font-bold text-white mb-2">10k+</div>
      <div className="text-white/60">Active learners globally</div>
    </div>
    <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 transform hover:scale-105 transition-all duration-500">
      <div className="text-7xl font-bold text-white mb-2">24/7</div>
      <div className="text-white/60">Interactive learning platform</div>
      <div className="flex gap-4 mt-4">
        {[BookOpen, Code2, Blocks].map((Icon, index) => (
          <div key={index} className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-purple-400" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StatCards;