import React from 'react';

export default function Pattern() {
  return (
    <svg
      width="100%"
      height="100%"
      className="absolute bottom-0 h-80 fill-purple-700 -z-10"
    >
      <mask maskUnits="userSpaceOnUse" id="fadeMaskGradient-home-workflow">
        <linearGradient
          id="maskGradient-home-workflow"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
        >
          <stop offset="0" style={{ stopColor: '#000000' }}></stop>{' '}
          <stop offset="1" style={{ stopColor: '#ffffff' }}></stop>
        </linearGradient>{' '}
        <rect
          fill="url(#maskGradient-home-workflow)"
          width="100%"
          height="100%"
        ></rect>
      </mask>{' '}
      <pattern
        id="patternRectGrid-home-workflow"
        x="0"
        y="0"
        width="35"
        height="35"
        patternUnits="userSpaceOnUse"
      >
        <rect width="3" height="6" style={{ fill: '#783AF' }}></rect>
      </pattern>{' '}
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#patternRectGrid-home-workflow)"
        mask="url(#fadeMaskGradient-home-workflow)"
        style={{ mixBlendMode: 'initial' }}
      ></rect>
    </svg>
  );
}
