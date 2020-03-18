import React, { Component } from 'react';
import './SignUp.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import agent from '../../agent';
import { store } from '../../store';
import NavBar from '../NavBar/NavBar';
import SubHeader from '../LandingPage/components/SubHeader'
import color from '../img/color.png'
class SignupForm extends Component {
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

  componentWillMount() {
    const { givenName, familyName, email } = this.props.user;
    console.log(this.props);
    this.setState({
      user: {
        ...this.state.user, firstname: givenName, lastname: familyName, email,
      },
    });
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
      <div className="blue-bg" >
        <SubHeader/>
        <div classNameName="sign-up-form-div">
        <div className="main-content">
    <section className="slice slice-lg min-vh-100 d-flex align-items-center bg-section-secondary">
      {/* <!-- SVG background --> */}
      <div className="bg-absolute-cover bg-size--contain d-none d-lg-block">
        
      </div>
      <div className="container py-5 px-md-0 d-flex align-items-center">
        <div className="w-100">
          <div className="row row-grid justify-content-center justify-content-lg-between align-items-center" style={{display:'flex',justifyContent:"space-between"}}>
            <div className="col-sm-8 col-lg-6 col-xl-5 order-lg-2">
              <div className="card shadow zindex-100 mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-5">
                    <h6 className="h3">Create account</h6>
                    <p className="text-muted mb-0">Made with love by developers for developers.</p>
                  </div>
                  <span className="clearfix"></span>
                  <form role="form">
                    <div className="form-group">
                      <label className="form-control-label">First Name</label>
                      <div className="input-group input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="far fa-user"></i></span>
                        </div>
                        {/* <input type="email" className="form-control" id="input-email" placeholder="name@example.com"/> */}
                        <input type="text" className="form-control" name="first-name" placeholder="First Name" onChange={(e) => this.setState({ user: { ...this.state.user, firstname: e.target.value } })} required value={this.state.user.firstname} />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label className="form-control-label">Last Name</label>
                      <div className="input-group input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="far fa-key"></i></span>
                        </div>
                        <input type="text" name="last-name" placeholder="Last Name" className="form-control" onChange={(e) => this.setState({ user: { ...this.state.user, lastname: e.target.value } })} required value={this.state.user.lastname} />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="far fa-eye"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Gender</label>
                      <div className="input-group input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="far fa-key"></i></span>
                        </div>
                        <select id="gender" name="gender" className="form-control"  onChange={(e) => this.setState({ user: { ...this.state.user, gender: e.target.value } })} defaultValue={this.state.user.gender}>
                          <option value="M">Male</option>
                          <option value="F">Female</option>

                        </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">Birthday</label>
                        <div className="input-group input-group-merge">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="far fa-key"></i></span>
                          </div>
                          <input
                            type="date"
                            name="birthday"
                            placeholder="Birthday"
                            className="form-control"
                            onChange={(e) => this.setState({ user: { ...this.state.user, birthday: e.target.value } })}
                            required
                            value={this.state.user.birthday}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                      <label className="form-control-label">Email</label>
                      <div className="input-group input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="far fa-key"></i></span>
                        </div>
                        <input type="text" name="email" disabled placeholder="E-mail" className="form-control" onChange={(e) => this.setState({ user: { ...this.state.user, email: e.target.value } })} required value={this.state.user.email} />
                        
                      </div>
                      <div className="form-group">
                      <label className="form-control-label">Phone</label>
                      <div className="input-group input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="far fa-key"></i></span>
                        </div>
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          onChange={(e) => this.setState({ user: { ...this.state.user, phone: e.target.value } })}
                          required
                          value={this.state.user.phone}
                        />
                        </div>
                      </div>
                    </div>
                    <div className="my-4">
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="check-terms"/>
                        <label className="custom-control-label" for="check-terms">I agree to the <a href="#">terms and conditions</a></label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="check-privacy"/>
                        <label className="custom-control-label" for="check-privacy">I agree to the <a href="#">privacy policy</a></label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button type="button" className="btn btn-sm btn-primary btn-icon rounded-pill" onClick={this.signup} >
                        <span className="btn-inner--text">Create my account</span>
                        <span className="btn-inner--icon"><i className="far fa-long-arrow-alt-right"></i></span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer px-md-5"><small>Already have an acocunt?</small>
                  <a href="#" className="small font-weight-bold">Sign in</a></div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 d-none d-lg-block" style={{color:'white',transform:'translateY(-600%)'}}>
                <h3 className="h2 ">Keep your face always toward the sunshine - and shadows will fall behind you.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='footer-btn'>
           <img src={color} className='footer-img'/>
    </div>
  </div>
          {/* <center>
            <form onSubmit={this.signup} classNameName="sign-up-form">

              <label>First Name</label>
              <input type="text" classNameName="text-input" name="first-name" placeholder="First Name" onChange={(e) => this.setState({ user: { ...this.state.user, firstname: e.target.value } })} required value={this.state.user.firstname} //>


              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name" classNameName="text-input" onChange={(e) => this.setState({ user: { ...this.state.user, lastname: e.target.value } })} required value={this.state.user.lastname} //>


              <label>Birthday</label>
              <inpu/t
                type="date"
                name="birthday"
                placeholder="Birthday"
                classNameName="text-input"
                onChange={(e) => this.setState({ user: { ...this.state.user, birthday: e.target.value } })}
                required
                value={this.state.user.birthday}
              />


              <label>Gender</label>
              <select id="gender" name="gender" classNameName="text-input" onChange={(e) => this.setState({ user: { ...this.state.user, gender: e.target.value } })} defaultValue={this.state.user.gender}>
                <option value="M">Male</option>
                <option value="F">Female</option>

              </select>


              <label>Email</label>
              <input type="text" name="email" disabled placeholder="E-mail" classNameName="text-input" onChange={(e) => this.setState({ user: { ...this.state.user, email: e.target.value } })} required value={this.state.user.email} //>
              <p>This is the main email address that we will send notifications to.Manage you notifications in order to recieve only the things that matter you the most</p>

              <label>Phone number</label>
              <inpu/t
                type="number"
                name="phone"
                placeholder="Phone Number"
                classNameName="text-input"
                onChange={(e) => this.setState({ user: { ...this.state.user, phone: e.target.value } })}
                required
                value={this.state.user.phone}
              />

              
              <input classNameName="btn btn-block btn-primary" type="submit" name="signup_submit" value="Sign me up" //>
            </form>
          </center> */}
        </div>
      </div>
    );
  }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({
  user: state.auth.user,

});
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
