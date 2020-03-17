import React, { Component } from 'react';
import './HomePage.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';


import NavBar from '../NavBar/NavBar';
import SignUp from '../SignUp/SignUp';

import flag from '../img/flag.png';
import cart from '../img/cart.png';
import color from '../img/color.png';
import menu from '../img/menu.png';
import search from '../img/search.png';
import send from '../img/send.png';
import user from '../img/user.png';
import bird from '../img/bird.png';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.user = {};
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({ user: this.props.user });
  }

  render() {
    return (
      <div className="gradient-bg">
        <div className="main-background">
          <NavBar logFunction={this.props.logout.bind(this)} />
          <div className="sub-header">
            <div className="sub-header-left">
              <img src={bird} />
              <h1>purpose</h1>

            </div>
            <img src={menu} className="menu-img" />

          </div>
          <div className="main-body">
            <h3>{` Welcome ${this.state.user.givenName} ${this.state.user.familyName}`}</h3>
            <p>Build responsive, mobile-first projects on the web wit the world's most popular front-end omponent library</p>
            {/* <div className="body-input-div">
             <input type="email" required className="body-input" placeholder='Enter your Email address' />
             <button className="body-input-btn">
               <img src={send} className="body-input-btn-img" />
             </button>

           </div> */}

          </div>
          <div className="footer-btn">
            <img src={color} className="footer-img" />
          </div>


        </div>
      </div>
    // <div style={{ backgroundColor: '#222', height: '100vh' }}>
    //     <div style={{position:'absolute',top:'50%',left:'50%',display:'flex',flexDirection:'column',justifyContent:'space-between',transform:'translate(-50%,-50%)',width:'50%',height:'50%',backgroundColor:'#fff',alignItems:'center'}}>
    //       <h1 style={{textAlign:'center'}}>{` Welcome ${this.state.user.givenName} ${this.state.user.familyName}`}</h1>

    //         <button style={{backgroundColor:"#222",padding:'10px 20px',color:'white',width:'100%'}} onClick={()=>this.props.logout()}> Logout</button>
    //     </div>
    // </div>
    );
  }
}

// console.log("in the admin mstp func", state)
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: LOGOUT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
