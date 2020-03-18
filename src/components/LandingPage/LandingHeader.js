/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './LandingPage.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';



class AdminPage extends Component {
 
  render() {
    return (
      <div className=''>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
          <span className='landing-header'>C</span>
       </div>
    );
  }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
