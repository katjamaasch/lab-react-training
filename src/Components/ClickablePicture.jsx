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
    const { img, imgClicked } = this.props;
    return (
      <div>
        <img
          src={glasses ? `${img}` : `${imgClicked}`}
          alt="to see or not to see"
          onClick={this.putGlassesOn}
        />
      </div>
    );
  }
}

export default ClickablePicture;
