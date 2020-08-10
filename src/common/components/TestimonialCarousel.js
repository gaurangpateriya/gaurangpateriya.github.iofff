import React, { useEffect, useState } from 'react';
import 'tachyons';
import Slider from 'react-slick';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import './styles.css';

import {  testimonialData } from '../../constants/data';

// const testimonial 
const CourseDetails = () => {
	// console.log(our_team);
	const [ mobileView, setMobileView ] = useState(false);

	const resize = () =>{
		setMobileView(window.innerWidth <= 576);
	};
	useEffect(()=>{
		resize();
		window.addEventListener('resize', () => resize());
		return () => {
			window.removeEventListener('resize', () => resize());
		};
	},[]);

	
	const testimonialSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		variableWidth: !mobileView,
	};
	
	return (
		<>							
			<div className='testimonial-carousel'>
				<h1 className='heading'>Testimonials</h1>
				<Slider {...testimonialSettings} >
					{
						testimonialData.map((t,i) => (
							<a href={t.linkedInURL} className='mentor' style={{width: Math.min(window.innerWidth- 20, 300)}} >
								<div className='quote-svg'>
									<FormatQuoteIcon/>
								</div>
								<div className='discreption'>
									<p> {t.testimonial} </p>
								</div>
								<div className='header'>
									<img src={t.photo} alt="" />	
								</div>
                            
								<div className='heading'>
									<div className='name'>
										<a href={t.linkedInURL}>
										    <LinkedInIcon />
										</a>
										<p>{t.name}</p>
									</div>
								</div>
							</a>
						))    
					}
				</Slider>
			</div>
			
		</>
	);
};

export default CourseDetails;
