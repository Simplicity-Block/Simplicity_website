import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="mb-8">
              <h1 className="text-7xl font-bold text-white mb-6">
                Learn Blockchain
                <br />
                Through
                <br />
                Simplicity
              </h1>
              <p className="text-white/60 text-lg max-w-xl">
                Experience blockchain technology hands-on with SimpleCoin, our educational cryptocurrency designed to make learning intuitive and engaging.
              </p>
            </div>
            <Link 
              to="/downloads"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium border border-purple-500/30 hover:border-purple-500 transition-all"
            >
              START LEARNING
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;