
import React, { Component } from 'react';
import '../N26Signup.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      dd: '',
      MM: '',
      YYYY: '',
      hideNav:true,
    };
    this.updateUserDetails = this.updateUserDetails.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({ userDetails: this.props.details.userDetails });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}

resize() {
    this.setState({hideNav: window.innerWidth <= 760});
}

  updateUserDetails(e) {
    e.preventDefault();
    const dob = `${this.state.DD}-${this.state.MM}-${this.state.YYYY}`;
    this.state.userDetails = { ...this.state.userDetails, dob };
    console.log(this.state.userDetails);

    this.props.details.updateSequence(this.state.userDetails, this.props.details.index);
  }

  render() {
    const {
      firstName, LastName, email, dob,
    } = this.state.userDetails;
    return (
      <div className="outer-div">
        <div className="hv hw hx">
          {
              this.state.hideNav?null:<div><h2 tabIndex="-1" className="b">Personal Information</h2>
          <p className="cd ic">To get started, tell us about yourself.</p></div>}
          <div className=" w-60 ">
            <form onSubmit={this.updateUserDetails}>


              <div className="">
                <div className="flex">
                  <div className="input-label-div">

                    <input
                      type="text"
                      name="first-name"
                      className="inp"
                      required
                      value={firstName}
                      onChange={(e) => this.setState({ userDetails: { ...this.state.userDetails, firstName: e.target.value } })}
                    />
                    <label className="inp-label">
                          First Name
                    </label>
                  </div>
                  <div className="input-label-div">

                    <input
                      type="text"
                      name="last-name"
                      className="inp"
                      required
                      value={LastName}
                      onChange={(e) => this.setState({ userDetails: { ...this.state.userDetails, LastName: e.target.value } })}
                    />
                    <label className="inp-label">
                          Last Name
                    </label>
                  </div>
                  {/* <TextField className="w-60 text-field" id="filled-basic" label="First Name" variant="filled" style />
                <TextField className="w-40 text-field" id="filled-basic" label="Last Name" variant="filled" /> */}
                </div>
              </div>
              <div>

                <div className="input-label-div">

                  <input
                    type="text"
                    name="email"
                    className="inp"
                    required
                    value={email}
                    onChange={(e) => this.setState({ userDetails: { ...this.state.userDetails, email: e.target.value } })}
                  />
                  <label className="inp-label">
                          Email Address
                  </label>
                </div>
                {/* <TextField className="w-60" id="filled-basic" label="Email Address" variant="filled" /> */}
              </div>
              <div>
                <legend className="la">Date of Birth</legend>
                <div className="flex">
                  <div className="input-label-div">

                    <input type="number" name="date" className="inp" required value={this.state.DD} onChange={(e) => this.setState({ DD: e.target.value })} />
                    <label className="inp-label">
                          DD
                    </label>
                  </div>
                  <div className="input-label-div">

                    <input type="number" name="month" className="inp" value={this.state.MM} required onChange={(e) => this.setState({ MM: e.target.value })} />
                    <label className="inp-label">
                          MM
                    </label>
                  </div>
                  <div className="input-label-div">

                    <input type="number" name="year" className="inp" value={this.state.YYYY} required onChange={(e) => this.setState({ YYYY: e.target.value })} />
                    <label className="inp-label">
                         YYYY
                    </label>
                  </div>
                  {/* <TextField className="w-20" id="filled-basic" label="DD" variant="filled" />
                <TextField className="w-20" id="filled-basic" label="MM" variant="filled" />
                <TextField className="w-60" id="filled-basic" label="YYYY" variant="filled" /> */}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
