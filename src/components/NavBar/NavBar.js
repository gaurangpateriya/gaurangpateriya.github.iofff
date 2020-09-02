import React from 'react';

import { APP_NAME, APP_NAME_short } from '../../constants/otherConstants';
import { Link } from 'react-router-dom';
import 'tachyons';
import './NavBar.css';
import  logo from '../../assets/Images/AboutUS/logo_short.png';
class BootstrapNavbar extends React.Component{

	render(){
		return(
			
			<nav className='nav-bar' >
				<div className='logo' >
					<img src={logo} alt='logo'/>
					<h1>{APP_NAME_short}</h1>
				</div>
				<div className='end-links'>
					<button type='button'>
						<Link to='/login' >Login</Link>
					</button>
					<button type='button'>
						<Link to='/register' >Register</Link>
					</button>
				</div>  
			</nav>
			
		);  
	}
}

export default BootstrapNavbar;