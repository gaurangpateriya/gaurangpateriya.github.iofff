import React from 'react';

import { APP_NAME, APP_NAME_short } from '../../constants/otherConstants';
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
                        Join Us
					</button>

				</div>  
			</nav>
			
		);  
	}
}

export default BootstrapNavbar;