
import React, { Component } from 'react';
import '../N26Signup.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class CreatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      confirmPass: '',
    };
    this.updateUserDetails = this.updateUserDetails.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({ userDetails: this.props.details.userDetails });
  }

  updateUserDetails(e) {
    e.preventDefault();
    if (this.state.userDetails.password === this.state.confirmPass) {
      console.log(this.state.userDetails);
      this.props.details.updateSequence(this.state.userDetails, this.props.details.index);
    }
  }

  render() {
    const {
      password,
    } = this.state.userDetails;
    return (
      <div className="outer-div">
        <div className="hv hw hx">
          <h2 tabIndex="-1" className="b">Create Password</h2>
          <p className="cd ic">To Secure Your Account</p>
          <div className=" w-60 ">
            <form onSubmit={this.updateUserDetails}>
              <div>

                <div className="input-label-div">

                  <input
                    type="password"
                    name="password"
                    className="inp"
                    required
                    value={password}
                    onChange={(e) => this.setState({ userDetails: { ...this.state.userDetails, password: e.target.value } })}
                  />
                  <label className="inp-label">
                          Password
                  </label>
                </div>
                <div className="input-label-div">

                  <input
                    type="password"
                    name="password"
                    className="inp"
                    required
                    value={this.state.confirmPass}
                    onChange={(e) => this.setState({ confirmPass: e.target.value })}
                  />
                  <label className="inp-label">
                        Confirm Password
                  </label>
                </div>
                {/* <TextField className="w-60" id="filled-basic" label="Email Address" variant="filled" /> */}
              </div>
              <div className=" flex">
                <button type="button" className="back-btn" onClick={() => this.props.details.backSequence(this.props.details.index-1)}>
                  <KeyboardBackspaceIcon />
                  <p aria-hidden="true">Back</p>
                </button>
                <button type="submit" className="continue-btn  pointer  ">Continue</button>
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
