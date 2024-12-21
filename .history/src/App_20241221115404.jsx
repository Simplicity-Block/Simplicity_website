// src/App.jsx
import React, { useRef } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Block from './components/Block';
import { useScroll } from './components/useScroll.jsx';
import WhoRuns from "./components/WhoRuns";
import Capabilities from "./components/Capabilities";
import FloatingElements from "./components/FloatingElements.jsx";

import Simplicity from './components/Simplicity';
import GetStartedSteps from './components/GetStartedSteps';
import Timeline from './components/Timeline';
import WalletSection from "./components/Wallet.jsx"
const App = () => {
  const gradientRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);

  const refs = { gradientRef, block1Ref, block2Ref, block3Ref };
  useScroll(refs);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div ref={gradientRef} className="fixed inset-0 pointer-events-none transition-all duration-1000" />
      
      {/* Floating Blocks */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4">
          <Block refProp={block1Ref} delay={0} />
        </div>
        <div className="absolute top-1/2 right-1/3">
          <Block refProp={block2Ref} delay={0.2} />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <Block refProp={block3Ref} delay={0.4} />
        </div>
      </div>

      {/* <FloatingElements /> */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <WhoRuns />
        <Capabilities />
        <Simplicity />
      <GetStartedSteps />
      <WalletSection/>
      <Timeline />

      </div>

    </div>
  );
};

export default App;