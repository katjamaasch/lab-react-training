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
          <div key={profile.img} className="facebookCard">
            <div>
              <img
                src={profile.img}
                alt={profile.firstName + 's picture is missing'}
                height="200px"
              />
            </div>
            <div className="facebookDetails">
              <p>
                <b>First Name:</b> {profile.firstName}
              </p>
              <p>
                <b>Last Name:</b> {profile.lastName}
              </p>
              <p>
                <b>Country: </b>
                {profile.country}
              </p>
              <p>
                <b>Type: </b>
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Facebook;
