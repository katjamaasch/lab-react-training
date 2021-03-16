import React from 'react';
class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      image: `img/dice-empty.png`,
    };
  }
  rollTheDice = () => {
    this.setState({
      image: `img/dice-empty.png`,
    });
    setTimeout(() => {
      let diceNumber = Math.ceil(Math.random() * 6).toString();
      this.setState({
        image: `img/dice${diceNumber}.png`,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          className="dice"
          src={this.state.image}
          alt=""
          onClick={this.rollTheDice}
        />
      </div>
    );
  }
}
export default Dice;
