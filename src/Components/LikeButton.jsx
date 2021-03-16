import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  //changeColor = () => {}

  handleIncrementLike = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return (
      <div>
        <button
          style={{ backgroundColor: color[this.state.number % color.length] }}
          onClick={this.handleIncrementLike}
        >
          {' '}
          {this.state.number} Like{this.state.number !== 1 && 's'}{' '}
        </button>
      </div>
    );
  }
}

export default LikeButton;
