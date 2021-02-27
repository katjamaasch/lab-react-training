import React from 'react';

const RandomNumber = ({ number }) => {
  const randomNumber = Math.ceil(Math.random() * (number - 1) + 1).toString();
  return (
    <div className="greeting">
      <p>
        Random Value between 1 and {number} => {randomNumber}
      </p>
    </div>
  );
};

export default RandomNumber;
