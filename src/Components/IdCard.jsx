import React from 'react';

const IdCard = ({ picture, lastName, firstName, gender, height, birth }) => {
  return (
    <div className="idCard">
      <div>
        <img src={picture} alt="profile" className="imageIdCard"></img>
      </div>
      <div className="">
        <p>
          <b>First name: </b>
          {firstName}
        </p>
        <p>
          <b>Last name: </b>
          {lastName}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Height </b>
          {height / 100}m
        </p>
        <p>
          <b>Birth: </b>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
