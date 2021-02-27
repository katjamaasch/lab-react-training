import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const color =
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  const perceivedBrightness = (r, g, b) => {
    return Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068) > 255 / 2
      ? 'black'
      : 'white';
  };

  return (
    <div
      className="colorBox"
      style={{ backgroundColor: color, color: perceivedBrightness(r, g, b) }}
    >
      <h3>
        rgb({r},{g},{b})
      </h3>
      <h3>{color}</h3>
    </div>
  );
};

export default BoxColor;
