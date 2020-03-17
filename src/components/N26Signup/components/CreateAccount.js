
import React, { Component } from 'react';
import '../N26Signup.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class CreateAccount extends Component {
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
          <h2 tabIndex="-1" className="b">Create Account</h2>
          <p className="cd ic">Create Your Account</p>
          <div className=" w-60 ">
            <form onSubmit={this.updateUserDetails}>
              

                
              <div className=" flex">
                <button type="button" className="back-btn" onClick={() => this.props.details.backSequence(this.props.details.index-1)}>
                  <KeyboardBackspaceIcon />
                  <p aria-hidden="true">Back</p>
                </button>
                <button type="submit" className="continue-btn  pointer  ">Create</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
