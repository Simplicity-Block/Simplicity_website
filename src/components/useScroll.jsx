// src/hooks/useScroll.js
import { useState, useEffect } from 'react';

export const useScroll = (refs) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Update gradient
      if (refs.gradientRef.current) {
        const x = 50 + Math.sin(position * 0.001) * 30;
        const y = 50 + Math.cos(position * 0.001) * 30;
        refs.gradientRef.current.style.background = `
          radial-gradient(circle at ${x}% ${y}%, 
          rgba(147, 51, 234, 0.2) 0%, 
          rgba(147, 51, 234, 0.1) 20%, 
          rgba(147, 51, 234, 0.05) 40%, 
          transparent 60%)
        `;
      }
      
      // Update blocks
      [refs.block1Ref, refs.block2Ref, refs.block3Ref].forEach((ref, index) => {
        if (ref.current) {
          const offset = position * (0.1 + index * 0.05);
          const scale = 1 + Math.sin(position * 0.001) * 0.1;
          ref.current.style.transform = `rotate3d(1, 1, 1, ${offset}deg) scale(${scale})`;
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [refs]);

  return { scrollPosition, mousePosition };
};