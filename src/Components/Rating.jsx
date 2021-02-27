import React from 'react';

const Rating = ({ children }) => {
  console.log(children);
  return (
    <div>
      <h1>
        {'★'.repeat(Math.round(children))}
        {'☆'.repeat(Math.round(5 - Math.round(children)))}
      </h1>
    </div>
  );
};

export default Rating;
