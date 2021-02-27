import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const color =
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return (
    <div className="colorBox" style={{ backgroundColor: color }}>
      <h3>
        rgb({r},{g},{b})
      </h3>
      <h3>{color}</h3>
    </div>
  );
};

export default BoxColor;
