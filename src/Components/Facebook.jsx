import React, { Component } from 'react';
import profiles from './../data/berlin.json';

class Facebook extends Component {
  state = {
    profiles: profiles,
  };

  render() {
    return (
      <div>
        {this.state.profiles.map((profile) => (
          <div key={profile.img}>{profile.firstName}</div>
        ))}
      </div>
    );
  }
}

export default Facebook;
