import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting;
  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  } else if (lang === 'es') {
    greeting = 'Ola';
  }

  return (
    <div className="greeting">
      <p>
        {greeting} {children}
      </p>
    </div>
  );
};

export default Greetings;
