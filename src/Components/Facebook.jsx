import React, { Component } from 'react';
import profiles from './../data/berlin.json';

class Facebook extends Component {
  state = {
    profiles: profiles,
    selectedCountry: null,
  };

  handleHighlightedCountry = (country) => {
    this.setState({
      selectedCountry: country,
    });
  };

  render() {
    const { selectedCountry, profiles } = this.state;
    const countries = [];
    for (let profile of profiles) {
      //  const country = profile.country;
      if (!countries.includes(profile.country)) {
        countries.push(profile.country);
      }
    }

    return (
      <div>
        <button onClick={() => this.handleHighlightedCountry(null)}>All</button>
        {countries.map((country) => (
          <button
            onClick={() => this.handleHighlightedCountry(country)}
            style={{
              backgroundColor: country === selectedCountry && 'lightblue',
            }}
          >
            {country}
          </button>
        ))}
        <p></p>
        {this.state.profiles.map((profile) => (
          <div
            key={profile.img}
            className="facebookCard"
            style={{
              backgroundColor:
                profile.country === selectedCountry && 'lightblue',
            }}
          >
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
