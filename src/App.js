import React from 'react';
import logo from './logo.svg';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import RandomNumber from './Components/RandomNumber';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
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
      <h1>Greetings</h1>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="fr">Francois</Greetings>
      <h1>Random</h1>
      <RandomNumber number={5} />
      <RandomNumber number={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>Credit Card</h1>
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
      <h1>Rating</h1>
    </div>
  );
}

export default App;
