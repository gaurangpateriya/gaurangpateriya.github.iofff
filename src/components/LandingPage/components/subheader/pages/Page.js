/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { OverlayTrigger } from 'react-bootstrap';

class AdminPage extends Component {
  componentWillMount() {
    this.setState({ info: this.props.pageInfo });
  }

  renderTooltip(props) {
    return <Tooltip {...props}>Simple tooltip</Tooltip>;
  }

  render() {
    const { heading, subHeading, pages } = this.state.info;
    return (
      <div className="gradient-bg">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={this.renderTooltip}
        >
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        <a href="#" className="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="media d-flex align-items-center">

            <figure style={{ width: '50px' }}>
              <img src="assets/img/icons/essential/detailed/Secure_Files.svg" className="svg-inject img-fluid" style={{ height: '50px' }} />
            </figure>

            <div className="media-body ml-3">
              <h3 className="mb-1">{heading}</h3>
              <p className="mb-0">{subHeading}</p>
            </div>
          </div>
        </a>
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
{ /* <ul className="dropdown-menu">
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
        </ul> */ }
