import React, { Component } from 'react';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      nationality: null,
      password: null,
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <form className="signUpForm" onSubmit={this.handleFormSubmission}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
            />
          </div>
          <div>
            <label for="inlineFormCustomSelect">Nationality</label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              value={this.state.nationality}
              onChange={this.handleInputChange}
              name="nationality"
            >
              <option value="en">English</option>
              <option value="ge">German</option>
              <option value="fr">French</option>
            </select>
          </div>
          <br></br>
          <button class="btn btn-primary">Submit</button>
        </form>

        {this.state.nationality === 'german' ? (
          <div>
            <p>Hallo</p>
            <p>Deine Emailadress ist: {this.state.email} </p>
            <p>
              Deine Emailadresse ist {this.state.email.length} Zeichen lang.
            </p>
          </div>
        ) : this.state.nationality === 'english' ? (
          <div>
            <p>Hallo</p>
            <p>Your email address is: {this.state.email} </p>
            <p>Your email adress is </p>
          </div>
        ) : this.state.nationality === 'french' ? (
          <div>
            <p>Bonjour!</p>
            <p>Je suis desolé, mais je ne comprends pas francais.</p>
          </div>
        ) : (
          <p>Please specify your personal information above.</p>
        )}
      </React.Fragment>
    );
  }
}

export default SignUpPage;
