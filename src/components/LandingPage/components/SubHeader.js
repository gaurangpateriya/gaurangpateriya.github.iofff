/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './SubHeader.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap';
import { push } from 'react-router-redux';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

// import Page from './subheader/pages/Page';
import menu from '../../img/menu.png';
import bird from '../../img/bird.png';
import cart from '../../img/supermarket.png';
import downarrow from '../../img/down-arrow.png';
import Drawer from '../../SideDrawer/SideDrawer';

import {store} from '../../../store'

class
AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      showSections: false,
      showDocs: false,
      hideNav: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  //   this.pages = [
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //     { heading: 'Landing', subHeading: 'A grate Point to Start', pages: [] },
  //   ];
  //   this.togglePagesMenu = this.togglePagesMenu.bind(this);
  // }

  // togglePagesMenu() {
  //   this.setState({ menu: !this.state.menu });
  // }

  // toggleSectionsMenu() {
  //   this.setState({ showSections: !this.state.menu, menu: false, showDocs: false });
  // }

  // toggleDocsMenu() {
  //   this.setState({ showDocs: !this.state.menu, menu: false, showSections: false });
  // }

  // renderPages() {
  //   return this.pages.map((p, i) => <Page pageInfo={p} key={i} />);
  // }
  renderTooltip(props) {
    return <Tooltip {...props}>Go To BootStrap Themes</Tooltip>;
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    const currentHideNav = (window.innerWidth <= 760);
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <nav className="" id="navbar-main">


        {this.state.hideNav
          ? (
            <div className="flex" style={{ justifyContent: 'space-between',zIndex:1400 }}>
              <img src={bird} id="navbar-logo" style={{ height: '50px' }} />
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.toggleDrawer}>
                <Menu style={{ color: 'white' }} />
              </IconButton>
            </div>

          )
          : (
            <div className="inline-container container px-lg-0" style={{padding:'3%'}}>
              {/* <!-- Logo --> */}

              <img src={bird} id="navbar-logo" style={{ height: '50px' }} />
              <div className="navbars">
                <div className="navbars w-50">
                  <a className="nav-link-a " href="/">Overview</a>
                  <div className="flex">

                    <a className="nav-link-a " href="/">Pages</a>
                    <img src={downarrow} className="drawer-icon" />
                  </div>

                  <div className="flex">

                    <a className="nav-link-a " href="/">Sections</a>
                    <img src={downarrow} className="drawer-icon" />
                  </div>
                </div>
                <div className="navbars w-50">
                  <div className="flex">

                    <a className="nav-link-a " href="/">Docs</a>
                    <img src={downarrow} className="drawer-icon" />
                  </div>
                  <a className="nav-link-a" href="/">What's New</a>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 0, hide: 80 }}
                    overlay={this.renderTooltip}
                  >
                    <div className="purchase-bg" onClick={()=>store.dispatch(push('/n26-sign-up'))}>
                      <img src={cart} className="shopping-cart" />
                      <a className=" white " >Purchase Now</a>
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          )}
        <Drawer open={this.state.open} toggleDrawer={this.toggleDrawer} />
      </nav>
    );
  }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
