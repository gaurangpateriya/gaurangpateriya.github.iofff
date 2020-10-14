import React, {useEffect} from 'react';

import { APP_NAME, APP_NAME_short } from '../../constants/otherConstants';
import { Link } from 'react-router-dom';
import 'tachyons';
import './NavBar.css';
import  logo from '../../assets/Images/AboutUS/logo_short.png';
const BootstrapNavbar = () => {
	const handleScroll = () => {
		if (window.scrollY > 20) {
		  document.querySelector(".nav-bar").className = "nav-bar scroll";
		} else {
		  document.querySelector(".nav-bar").className = "nav-bar";
		}
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, [])
	
	return(
		
		<nav className='nav-bar' >
			<div className='logo' >
				<img src={logo} alt='logo'/>
				<h1>{APP_NAME_short}</h1>
			</div>
			<div className='end-links'>
				<button type='button'>
					<Link to='/talk-to-mentor' >Schedule a call</Link>
				</button>
				<button type='button'>
					<Link to='/talk-to-mentor' >Hire With Us</Link>
				</button>
				{/* <button type='button'>
					<Link to='/login' >Login</Link>
				</button> */}
				{/* <button type='button'>
					<Link to='/register' >Register</Link>
				</button> */}
			</div>  
		</nav>
		
	);  
	
}

export default BootstrapNavbar;