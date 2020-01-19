import React from 'react';

export const ActionCircle = ({ color = 'white' }) => (
  <>
    <circle
      cx="50%"
      cy="50%"
      r="163"
      style={{
        stroke: '#000000',
        strokeWidth: 4,
        fill: color,
      }}
    />
  </>
);
