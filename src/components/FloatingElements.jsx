import React, { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);
  const coinRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Rotate blocks
      [block1Ref, block2Ref, block3Ref].forEach((ref, index) => {
        if (ref.current) {
          const rotateY = scrollPosition * (0.1 + index * 0.05);
          const translateZ = Math.sin(scrollPosition * 0.003) * 50;
          ref.current.style.transform = `
            rotateY(${rotateY}deg)
            rotateX(${rotateY * 0.5}deg)
            translateZ(${translateZ}px)
          `;
        }
      });

      // Animate coin
      if (coinRef.current) {
        const coinRotation = scrollPosition * 0.2;
        const coinProgress = Math.min(scrollPosition / 1000, 1);
        const coinTranslateZ = -1000 + coinProgress * 1200;
        
        coinRef.current.style.transform = `
          rotateY(${coinRotation}deg)
          translateZ(${coinTranslateZ}px)
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none perspective-1000">
      {/* 3D Blocks */}
      <div ref={block1Ref} className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500/20 backdrop-blur-lg border border-purple-500/30 transition-transform duration-100" />
      <div ref={block2Ref} className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 transition-transform duration-100" />
      <div ref={block3Ref} className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-500/20 backdrop-blur-lg border border-indigo-500/30 transition-transform duration-100" />
      
      {/* 3D Coin */}
      <div 
        ref={coinRef}
        className="absolute left-1/2 top-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-100"
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          S
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;