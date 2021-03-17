import React from 'react';
class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      image: `img/dice-empty.png`,
    };
  }
/*   clickTheDice = () => {
    const foo = this.rollTheDice();
    this.setState({
      empty: !this.state.empty,
      image: foo,
    });
  };
  rollTheDice = () => {
    let diceNumber = Math.ceil(Math.random() * 6).toString();
    return `img/dice${diceNumber}.png`;
  }; */

    clickTheDice = () => {
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
          onClick={this.clickTheDice}
        />
      </div>
    );
  }
}
export default Dice;
