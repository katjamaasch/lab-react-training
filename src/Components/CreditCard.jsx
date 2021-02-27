import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let imagePath = '';
  if (type === 'Visa') {
    imagePath = './img/visa.png';
  } else {
    imagePath = './img/master-card.svg';
  }

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={imagePath} alt="bank" height="20px"></img>
      <h1>{number}</h1>
      <p>
        Expires {expirationMonth}/{expirationYear}    {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
