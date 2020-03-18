import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { push } from 'react-router-redux';
import { Slide, ToastContainer } from 'react-toastify';
import Drawer from './components/SideDrawer/SideDrawer'
import agent from './agent';
import {
  LandingPage,
  HomePage,
  SignupForm,
  N26Signup
} from './components';

import { APP_LOAD, REDIRECT } from './constants/actionTypes';
import { store } from './store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      showDrawer:false,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  componentWillMount() {
    // const token = window.localStorage.getItem('bearer');
    // if (token) {
    //   agent.setToken(token);
    // }
    // console.log('roken', token);
    // if (token === null) {
    //   // console.log('roken', token)
    //   store.dispatch(push('/'));
    //   this.props.onRedirect('/');
    // }

    // // store.dispatch(push('/tagging/12'));
    // this.props.onLoad(token ? 1 : null, token);
  }
toggleDrawer=()=>{
  this.setState({showDrawer:!this.state.showDrawer})
}
  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {showDrawer}=this.state;
    return (
      <div style={{ height: '100%' }}>
        <ToastContainer
          autoClose={2000}
          closeOnClick
          transition={Slide}
          pauseOnFocusLoss={false}
        />
    
        <ConnectedRouter history={this.props.history}>

          <Switch>
          {/* <Drawer open={showDrawer} toggleDrawer={this.toggleDrawer}/> */}
            {/* <Route path="/feedback" component={FeedbackPage} exact /> */}
            <Route path="/" component={LandingPage} exact />
            <Route path="/home" component={HomePage} exact />
            <Route path="/register" component={SignupForm} exact />
            <Route path="/n26-sign-up" component={N26Signup} exact />
            
            {/* <Route
              path="/otp/:phone"
              render={(props) => <OTPVerification {...props} exact />}
            />
            <Route path="/register" component={ImageCapture} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/home" component={HomePage} exact />
            <Route path="/offers" component={CreateOffer} exact />
            <Route path="/booking" component={AdminPage} exact />
            <Route path="/products" component ={ProductsPage} exact/>
            <Route path="/members" component ={MembersPage} exact/>
            <Route path="/reports" component ={ReportPage} exact/> */}
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
  apiKey: state.common.apiKey,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, apiKey) => dispatch({
    type: APP_LOAD,
    payload,
    apiKey,
    skipTracking: true,

  }),
  onRedirect: (route) => dispatch({ type: REDIRECT, payload: route }),
  clearReducer: () => dispatch({ type: 'CLEAR' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
