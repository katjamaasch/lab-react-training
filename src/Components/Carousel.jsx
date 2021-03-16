import React from 'react';

class Carousel extends React.Component {
  state = {
    number: 0,
  };

  nextInLine = () => {
    if (this.state.number < this.props.imgs.length - 1) {
      this.setState({
        number: this.state.number + 1,
      });
    } else {
      this.setState({
        number: 0,
      });
    }
  };

  previousInLine = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    } else {
      this.setState({
        number: this.props.imgs.length - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.number]} alt="Carousel Images" />
        <div>
          <button onClick={this.previousInLine}>Left</button>
          <button onClick={this.nextInLine}>Right</button>
        </div>
      </div>
    );
  }
}
export default Carousel;
