import React from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import RandomNumber from './Components/RandomNumber';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="iterationTitle">IdCard</h1>
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date(1992, 7, 14)}
        picture="https://source.unsplash.com/160x160/?cat"
      />
      <IdCard
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={172}
        birth={new Date(1988, 5, 11)}
        picture="https://source.unsplash.com/160x160/?dog"
      />
      <br></br>
      <h1 className="iterationTitle">Greetings</h1>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="fr">Francois</Greetings>
      <br></br>
      <h1 className="iterationTitle">Random</h1>
      <RandomNumber number={5} />
      <RandomNumber number={100} />
      <br></br>
      <h1 className="iterationTitle">BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <br></br>
      <h1 className="iterationTitle">Credit Card</h1>
      <div className="creditCardsDisplay">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={12}
          expirationYear={2019}
          bank="HSBC"
          owner="Pablo Escobar"
          bgColor="#ddbb55"
          color="white"
        />
        <CreditCard
          type="Visa"
          number="0123456789010995"
          expirationMonth={7}
          expirationYear={2022}
          bank="Deutsche Bank"
          owner="Dagobert Duck"
          bgColor="#eeeeee"
          color="#222222"
        />
      </div>
      <br></br>
      <h1 className="iterationTitle">Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <br></br>
      <h1 className="iterationTitle">DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        model="Toyota Corolla Altis"
        licensePlate="CO42DE"
      ></DriverCard>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        model="Audi A3"
        licensePlate="BE33ER"
      ></DriverCard>
      <br></br>
      <h1 className="iterationTitle">Like Button</h1>
      <div className="likeButtons">
        {' '}
        <LikeButton />
        <LikeButton />
      </div>
      <h1>Clickable Picture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      ></ClickablePicture>
    </div>
  );
}

export default App;
