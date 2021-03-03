import React from 'react';
class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      image: '',
    };
  }
  clickTheDice = () => {
    const image = this.rollTheDice();
    this.setState({
      empty: !this.state.empty,
      image: image,
    });
  };
  rollTheDice = () => {
    let diceNumber = Math.floor(Math.random() * 6 + 1).toString();
    return `img/dice${diceNumber}.png`;
  };
  render() {
    return (
      <div>
        <img
          className="dice"
          src={this.state.empty ? '/img/dice-empty.png' : this.state.image}
          alt=""
          onClick={this.clickTheDice}
        />
      </div>
    );
  }
}
export default Dice;
