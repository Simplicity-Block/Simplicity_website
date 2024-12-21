// src/App.jsx
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import WalletSection from "./components/WalletSection.jsx";
import DownloadsPage from './components/DownloadsPage';

const MainContent = ({ refs }) => (
  <div className="relative z-10">
    <Hero />
    <Features />
    <WhoRuns />
    <Capabilities />
    <Simplicity />
    <GetStartedSteps />
    <WalletSection />
    <Timeline />
  </div>
);

const BackgroundElements = ({ refs }) => (
  <>
    <div ref={refs.gradientRef} className="fixed inset-0 pointer-events-none transition-all duration-1000" />
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4">
        <Block refProp={refs.block1Ref} delay={0} />
      </div>
      <div className="absolute top-1/2 right-1/3">
        <Block refProp={refs.block2Ref} delay={0.2} />
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <Block refProp={refs.block3Ref} delay={0.4} />
      </div>
    </div>
  </>
);

const App = () => {
  const gradientRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);

  const refs = { gradientRef, block1Ref, block2Ref, block3Ref };
  useScroll(refs);

  return (
    <Router>
      <div className="min-h-screen bg-black overflow-hidden">
        <BackgroundElements refs={refs} />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainContent refs={refs} />} />
          <Route path="/downloads" element={<DownloadsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;