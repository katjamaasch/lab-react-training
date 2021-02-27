import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, model, licensePlate }) => {
  return (
    <div className="driverIdCard">
      <div>
        <img src={img} alt="car" className="driverCardImage"></img>
      </div>
      <div>
        <h2>
          <b>  {name}</b>
        </h2>
        <Rating>{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
