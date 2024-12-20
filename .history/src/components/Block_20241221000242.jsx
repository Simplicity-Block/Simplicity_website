import React from 'react';

const Block = ({ refProp, delay = 0 }) => (
  <div 
    ref={refProp}
    className="absolute w-20 h-20 backdrop-blur-lg border border-purple-500/30"
    style={{
      background: 'rgba(147, 51, 234, 0.1)',
      transform: 'rotate3d(1, 1, 1, 0deg)',
      transition: 'transform 0.5s ease-out',
      animationDelay: `${delay}s`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent" />
  </div>
);

export default Block;