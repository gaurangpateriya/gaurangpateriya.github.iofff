import React, { Component } from 'react';
import './SignUp.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { push } from 'react-router-redux';
import agent from '../../agent';
import { store } from '../../store';
import userAvatar from '../img/user-avatar.svg';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstname: '', lastname: '', phone: '', gender: 'M', birthday: '',
      },
      showSignup: false,
    };
    this.signup = this.signup.bind(this);
  }

    responseGoogle = (response) => {
      if (response.profileObj) {
        const { givenName, familyName, email } = response.profileObj;
        console.log(response.profileObj);
        this.props.setUser(response.profileObj);
        this.setState({
          user: {
            ...this.state.user, firstname: givenName, lastname: familyName, email,
          },
        });
        const data = {
          email: this.state.user.email,
        };
        console.log(data);
        // store.dispatch(push('/register'))

        agent.Auth.confirmEmail(data).then((res) => {
          console.log(res);
          if (res.data) {
            if (res.data.data) {
              if (res.data.data.exists) {
                window.localStorage.setItem('bearer', res.data.data.token);
                agent.setToken(res.data.data.token);
                store.dispatch(push('/home'));
              } else {
                store.dispatch(push('/register'));
              }
            }
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    }

    signup(e) {
      e.preventDefault();

      const {
        firstname, lastname, phone, email, birthday, gender,
      } = this.state.user;
      let date = birthday.split('-');
      date = `${date[2]}-${date[1]}-${date[0]}`;
      const data = {
        email,
        phone,
        gender,
        birthday: date,
        name: `${firstname} ${lastname}`,
      };
      // store.dispatch(push('/home'));

      console.log(data);
      agent.Auth.register(data).then((res) => {
        console.log(res);
        store.dispatch(push('/home'));
      }).catch((err) => {
        console.log(err.response);
      });
    //   console.log(res);
    }

    render() {
      return (
        <div style={{ height: '100%' }}>
          <div className="">
            <GoogleLogin
              clientId="928896030573-2biu76d0mtbjdsnh2rs4mjahaebi0am8.apps.googleusercontent.com"
              className="google-btn"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy="single_host_origin"
              redirectUri="https://extremist.team/oauth/complete/google"
              render={(renderProps) => (
                <button className="dropdown-list-item google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img src={userAvatar}/>
                                 <p>sign in</p>
                </button>
              )}
            />


          </div>
        </div>
      );
    }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
