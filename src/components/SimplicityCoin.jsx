import React from 'react';
import Hero from './Hero';
import Features from './Features';
import WhoRuns from './WhoRuns';
import Capabilities from './Capabilities';
import FloatingElements from './FloatingElements';
import Navigation from './Navigation';
import CallToAction from './CallToAction';

const SimplicityCoin = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Dynamic background with improved gradient */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 animate-gradient" />
      </div>
      
      <FloatingElements />
      <Navigation />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <WhoRuns />
        <Capabilities />
        <CallToAction />
      </div>
    </div>
  );
};

export default SimplicityCoin;