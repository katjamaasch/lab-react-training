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
    const countries = [];
    for (let profile of this.state.profiles) {
      const country = profile.country;
      if (!countries.includes(country)) {
        countries.push(country);
      }
    }

    return (
      <div>
        <button>All</button>
        {countries.map((country) => (
          <button
            onClick={() => this.handleHighlightedCountry(country)}
            style={{
              backgroundColor:
                country === this.state.selectedCountry && 'lightblue',
            }}
          >
            {country}
          </button>
        ))}
        {this.state.profiles.map((profile) => (
          <div
            key={profile.img}
            className="facebookCard"
            style={{
              backgroundColor:
                profile.country === this.state.selectedCountry && 'lightblue',
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
