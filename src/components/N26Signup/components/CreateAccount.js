
import React, { Component } from 'react';
import '../N26Signup.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockSharpIcon from '@material-ui/icons/LockSharp';

class CreatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      isPasswordhidden: true,
    };
    this.updateUserDetails = this.updateUserDetails.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({ userDetails: this.props.details.userDetails });
  }

  updateUserDetails(e) {
    e.preventDefault();
    if (this.strengthIndicator(this.state.userDetails.password) >= 5) {
      console.log(this.state.userDetails);
      this.props.details.updateSequence(this.state.userDetails, this.props.details.index);
    }
  }

  hasNumber = (value) => new RegExp(/[0-9]/).test(value)

 hasMixed = (value) => new RegExp(/[a-z]/).test(value)
             && new RegExp(/[A-Z]/).test(value)

 hasSpecial = (value) => new RegExp(/[!#@$%^&*)(+=._-]/).test(value)

strengthColor = (count) => {
  if (count < 2) return <p style={{ color: 'red' }}>Weak : password too short</p>;
//   if (count <= 3) return <p style={{ color: 'yellow' }}>Weak : Increase the password length</p>;
  if (count < 3) return <p style={{ color: 'orange' }}>Medium : Password should be combination of the Capital letter, small letters, numbers and special character.</p>;
  if (count < 4) return <p style={{ color: 'lightgreen' }}>Good : Password should be combination of the Capital letter, small letters, numbers and special character.</p>;
  if (count < 5) return <p style={{ color: 'green' }}>Good :Password should be combination of the Capital letter, small letters, numbers and special character.</p>;
  if (count >= 5) return <p style={{ color: 'green' }}>Strong : Your Password is Strong</p>;
}

  strengthIndicator = (value) => {
    let strengths = 0;
    if (value.length > 5) strengths++;
    if (value.length > 6) strengths++;
    if (this.hasNumber(value)) strengths++;
    if (this.hasSpecial(value)) strengths++;
    if (this.hasMixed(value)) strengths++;
    return strengths;
  }

  render() {
    const {
      password,
    } = this.state.userDetails;
    return (
      <div className="outer-div">
        <div className="hv hw hx">
          <h2 tabIndex="-1" className="b">Create Account</h2>
          <p className="cd ic">To create your  N26 account. please choose a password and agree to the Terms & Conditions</p>
          <div className=" w-60 ">
            <form onSubmit={this.updateUserDetails}>
              <div>

                <div className="input-label-div">

                  <input
                    type={this.state.isPasswordhidden ? 'password' : 'text'}
                    name="password"
                    className="inp"
                    required
                    value={password}
                    onChange={(e) => this.setState({ userDetails: { ...this.state.userDetails, password: e.target.value } })}
                  />
                  <label className="inp-label" name="password">
                          Password
                  </label>
                  <div className="password-mask" name="password" onClick={() => this.setState({ isPasswordhidden: !this.state.isPasswordhidden })}>
                    {
                          this.state.isPasswordhidden ? <VisibilityIcon /> : <VisibilityOffIcon />
                      }

                  </div>
                </div>
                {
                    password ? (
                      <strong className="flex">
                        {' Strength : '}
                        {this.strengthColor(this.strengthIndicator(password))}
                      </strong>
                    ) : <strong className="flex" />
                }

                <div className="flex mt2" style={{ justifyContent: 'flex-start' }}>
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkbox-custom rectangular" />
                  </label>
                  <div className="input-title"> By Checking this I agree that i accept all the terms and conditions</div>
                </div>
                <div className="flex mt2" style={{ justifyContent: 'flex-start' }}>
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkbox-custom rectangular" />
                  </label>
                  <div className="input-title"> By Checking this I agree that i have read all the agreements</div>
                </div>
              </div>
              <div className=" flex">
                <button type="button" className="back-btn" onClick={() => this.props.details.backSequence(this.props.details.index - 1)}>
                  <KeyboardBackspaceIcon />
                  <p aria-hidden="true">Back</p>
                </button>
                <button type="submit" className="continue-btn  pointer  ">
                  <LockSharpIcon />
Create My N26 Account
                </button>
              </div>
            </form>

          </div>
        </div>


      </div>
    );
  }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePassword);
