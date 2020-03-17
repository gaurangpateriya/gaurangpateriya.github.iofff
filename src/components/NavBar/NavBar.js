/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './NavBar.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import user from '../img/user.png';
import logout from '../img/logout.svg';
import search from '../img/search.png';
import cart from '../img/cart.png';
import flag from '../img/flag.png';
import SignUp from '../SignUp/SignUp';
import { LOGOUT } from '../../constants/actionTypes';

const StyledMenu = withStyles({
  paper: {

  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      hideNav: false,
    };
  }

  // [anchorEl, this.setState({] = React.useState(null);})
  

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { logFunction } = this.props;
    return (
      <div className="header">

        <div className="flag-img-div">
          <img src={flag} className="header-img" />
          <span className="header-text">EN</span>
        </div>
        <div className="header-div-left">
          <span className="header-text">Support</span>
          <img src={search} className="header-img" />
          <img src={cart} className="header-img" />
          <img src={user} onClick={this.handleClick.bind(this)} className="header-img" />

        </div>
        <div className="side-drawer">
          <StyledMenu
            id="customized-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose.bind(this)}
            style={{ transform: 'translateX(-2vh)', border: 'none' }}
          >
            <p className="dropdown-header ">User Menu</p>
            {logFunction ? (
              <button className="dropdown-list-item google" onClick={logFunction}>
                <img src={logout} />
                <p>Sign out</p>
              </button>
            ) : <SignUp />}


          </StyledMenu>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
