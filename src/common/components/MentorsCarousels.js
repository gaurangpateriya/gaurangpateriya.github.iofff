import React, { useState, useEffect } from 'react';
import 'tachyons';
import Slider from 'react-slick';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './styles.css';

import { our_team } from '../../constants/data';

// const testimonial 
const MentorsCarousel = () => {
	
	const [ mobileView, setMobileView ] = useState(false);

	const resize = () =>{
		setMobileView(window.innerWidth <= 576);
	}
	useEffect(()=>{
		resize();
		window.addEventListener("resize", () => resize())
		return () => {
			window.removeEventListener("resize", () => resize())
		}
	},[]);
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		variableWidth: !mobileView,
		variableHeight: true,
	};

      
	return (
		<>							
			<div className='our-team-carousel'>
				<h1 className='heading'>
            Meet our mentors
				</h1>
				<div className='carousel'>
					<Slider {...settings} >
						{
							our_team.map((t,i) => (
								<a href={t.linkedInURL} className='mentor' style={{width: Math.min(window.innerWidth- 20, 290)}} >
									<div className='header'>
										<img src={t.photo} alt="" />	
									</div>
									<div className='shadow'>
										<div className='heading'>
											<div className='name'>
												<a href={t.linkedInURL}>
													<LinkedInIcon/>
												</a>
												<p>{t.name}</p>
											</div>
											<div className='designation'>
												<img src={t.companyLogo} alt=""/>
												{t.designation}
											</div>
										</div>
										<div className='discreption'>
											<p> {t.info} </p>
										</div>
									</div>
								</a>
							))    
						}
					</Slider>
				</div>
			</div>	
		</>
	);
};

export default MentorsCarousel;
