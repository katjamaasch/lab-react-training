import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      glasses: false,
    };
  }

  putGlassesOn = () => {
    this.setState({
      glasses: !this.state.glasses,
    });
  };

  render() {
    const { glasses } = this.state;
    return (
      <div>
        <img
          src={
            glasses
              ? '/img/persons/maxence.png'
              : '/img/persons/maxence-glasses.png'
          }
          alt=""
          onClick={this.putGlassesOn}
        />
      </div>
    );
  }
}

export default ClickablePicture;
