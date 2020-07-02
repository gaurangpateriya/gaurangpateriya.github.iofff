import React from 'react';

import { APP_NAME } from '../../constants/otherConstants';
import 'tachyons';
import './NavBar.css';
import  logo from '../../assets/Images/AboutUS/logo_short.png';
class BootstrapNavbar extends React.Component{

	render(){
		return(
			
				<nav className='nav-bar' >
                    <div className='logo' >
                        <img src={logo} alt='logo'/>
                        <h1>{APP_NAME}</h1>
                    </div>
                    
                </nav>
			
		);  
	}
}

export default BootstrapNavbar;