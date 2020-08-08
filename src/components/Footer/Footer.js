import React, { useEffect, useState } from 'react';
import 'tachyons';
import Slider from 'react-slick';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Footer.css';
import { APP_NAME } from '../../constants/otherConstants';


const Footer = () => {
	// console.log(our_team);
	
  
	return (
		<>
			<div className='reach-us-div'>
				<div className='content'>
					<EmailIcon />
					<p>Email</p>
					<p>support@myweblink.store</p>
				</div>
				
				<div className='content'>
					<PhoneIcon />
					<p>Call Us</p>
					<p>+91 70034 42036</p>
				</div>
				<div className='content'>
					<LocationOnIcon />
					<p>Reach Us</p>
					<p>Onkar Bearing Co , No 38/1 Laxmipura , Vaderahalli -Sakalvara Road , Anekal Taluk , Bangalore -560083</p>
				</div>
			</div>	
		</>
	);
};

export default Footer;
