import React from 'react';
import { render } from 'react-dom';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    // const color=['purple','blue','green','yellow','orange','red'];
  }
  //changeColor = () => {}

  incrementLike = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementLike}>
          {' '}
          {this.state.number} Likes{' '}
        </button>
      </div>
    );
  }
}

export default LikeButton;
