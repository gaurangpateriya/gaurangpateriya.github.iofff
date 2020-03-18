/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './LandingPage.css';
import 'tachyons';
import _ from 'lodash';
import { connect } from 'react-redux';


import NavBar from '../NavBar/NavBar'
import SignUp from '../SignUp/SignUp'
import LandingHeader from './LandingHeader'
import SubHeader from './components/SubHeader'

import flag from '../img/flag.png';
import cart from '../img/cart.png';
import color from '../img/color.png';
import menu from '../img/menu.png';
import search from '../img/search.png';
import send from '../img/send.png';
import user from '../img/user.png';
import bird from '../img/bird.png';
import bg from '../img/bg-circles-1.svg'
class AdminPage extends Component {
 
  render() {
    return (
      <div className='gradient-bg'>
        <div className='bg-img'>
        <div className="main-background">
         <NavBar/>
         
         <SubHeader/>
         <div className="main-body">  
           <h3>Unleash your Creativity</h3>
           <p>Build responsive, mobile-first projects on the web wit the world's most popular front-end omponent library</p>
           <div className="body-input-div">
             <input type="email" required className="body-input" placeholder='Enter your Email address' />
             <button className="body-input-btn">
               <img src={send} className="body-input-btn-img" />
             </button>

           </div>

         </div>
         <div className='footer-btn'>
           <img src={color} className='footer-img'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
