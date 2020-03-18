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
      <div className="gradient-bg">
        <a href="#" className="list-group-item list-group-item-action dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="media d-flex align-items-center">
            {/* <!-- SVG icon --> */}
            <figure style={{ width: '50px' }}>
              <img src="assets/img/icons/essential/detailed/Secure_Files.svg" className="svg-inject img-fluid" style={{ height: '50px' }} />
            </figure>
            {/* <!-- Media body --> */}
            <div className="media-body ml-3">
              <h6 className="mb-1">Authentication</h6>
              <p className="mb-0">Examples for any scenario.</p>
            </div>
          </div>
        </a>
        <ul className="dropdown-menu">
          <li className="text-sm text-muted dropdown-header px-0">Basic</li>
          <li>
            <a className="dropdown-item" href="pages/authentication/basic-login.html">
                            Login
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="pages/authentication/basic-register.html">
                            Register
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="pages/authentication/basic-recover.html">
                            Recover
            </a>
          </li>
          <li className="dropdown-divider" />
          <li className="text-sm text-muted dropdown-header px-0">Cover</li>
          <li>
            <a className="dropdown-item" href="pages/authentication/cover-login.html">
                            Login
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="pages/authentication/cover-register.html">
                            Register
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="pages/authentication/cover-recover.html">
                            Recover
            </a>
          </li>
          <li className="dropdown-divider" />
          <li className="text-sm text-muted dropdown-header px-0">Simple</li>
          <li>
            <a className="dropdown-item" href="pages/authentication/simple-login.html">
                            Login
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="pages/authentication/simple-register.html">
                            Register
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="pages/authentication/simple-recover.html">
                            Recover
            </a>
          </li>
        </ul>

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
