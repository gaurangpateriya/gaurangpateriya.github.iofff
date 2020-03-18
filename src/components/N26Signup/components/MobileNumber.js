
import React, { Component } from 'react';
import '../N26Signup.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import {country_list} from '../../../common/data'

class MobileNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      typedmobile:"",
      mobile:"",
      cursor: 0,
     
    };
    this.searchResult = []
    this.updateUserDetails = this.updateUserDetails.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.selectCounty = this.selectCounty.bind(this)
  }

  componentWillMount() {
    console.log(this.props);
    let code = country_list.filter(c => c.name.toLowerCase() === this.props.details.userDetails.country.toLowerCase())
    if(code.length!==0)
        this.setState({ userDetails: this.props.details.userDetails,typedmobile:code[0].dial_code });
    else
        this.setState({ userDetails: this.props.details.userDetails,typedmobile:'+91'});
  }

  updateUserDetails(e) {
    e.preventDefault();
    this.state.userDetails = { ...this.state.userDetails,mobile:this.state.typedmobile}
    console.log(this.state.userDetails);
    this.props.details.updateSequence(this.state.userDetails, this.props.details.index);
  }
  handleKeyDown(e) {
    const { cursor,  } = this.state
    // console.log(e.keyCode)
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < this.searchResult.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    } 
    if( e.keyCode === 13 && cursor >=0){
        // console.log(this.searchResult[cursor])
        this.selectCounty(this.searchResult[cursor])
    }
  }

  selectCounty(country){
    console.log(country)
      if(country){
        this.searchResult = []
        this.setState({typedmobile:country.dial_code,mobile:country.dial_code})
    }
  }
  renderSearchBox() {
    const { cursor } = this.state
    return (
      <div className="search-box">
        {this.searchResult.map((s, i) => (
          <div className={i===cursor?`selected-entry`:'search-entry'} onClick={()=>this.selectCounty(s)}>
            <h3>{`${s.name} (${s.dial_code})`}</h3>
          </div>
        ))}
      </div>
    );
  }

  filterCountry(country) {
    this.searchResult = country_list.filter((c) => c.name.toLowerCase().includes(country.toLowerCase()));
    // console.log(country_list.toLowerCase(),country)
    // if(this.searchResult.length ===0)  this.searchResult = country_list.filter((c) => c.dial_code.includes(country));
    this.setState({ typedmobile: country });
  }


  render() {
    // const {
    //   mobile,
    // } = this.state.userDetails;
    return (
      <div className="outer-div">
        <div className="hv hw hx">
          <h2 tabIndex="-1" className="b">Mobile Number</h2>
          <p className="cd ic">What’s your phone number?</p>
          <div className=" w-60 ">
              <div>
                <div className="input-label-div">
                  <input
                    type="text"
                    name="phone-number"
                    className="inp"
                    required
                    value={this.state.typedmobile}
                    // onChange={(e) => this.setState({ userDetails: { ...this.state.userDetails, mobile: e.target.value } })}
                    onChange={(e) => this.filterCountry(e.target.value)}
                    onKeyDown={ this.handleKeyDown }
                  />
                  <label className="inp-label">
                        Mobile Phone Number
                  </label>
                </div>
                <div style={{position:'relative'}}>
              {
                  this.searchResult.length > 0 ? this.renderSearchBox() : null
              }
              </div>
              </div>

              <div className=" flex">
                <button type="button" className="back-btn" onClick={() =>this.props.details.backSequence(this.props.details.index-1)}>
                  <KeyboardBackspaceIcon />
                  <p aria-hidden="true">Back</p>
                </button>
                <button type="submit" className="continue-btn  pointer  " onClick={this.updateUserDetails}>Continue</button>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileNumber);
