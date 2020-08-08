import React from 'react';
import 'tachyons';
import Slider from 'react-slick';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import './styles.css';

import { our_team } from '../../constants/data';

// const testimonial 
const MentorsCarousel = () => {
	// console.log(our_team);
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		variableWidth: true,
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
								<div className='mentor' style={{width: Math.min(window.innerWidth- 20, 300)}} >
									<div className='header'>
										<img src={t.photo} alt="" />	
									</div>
									<div className='shadow'>
										<div className='heading'>
											<div className='name'>
												<LinkedInIcon/>
												<p>{t.name}</p>
											</div>
											<div className='designation'>
												{t.designation}
											</div>
										</div>
										<div className='discreption'>
											<p> {t.info} </p>
										</div>
									</div>
								</div>
							))    
						}
					</Slider>
				</div>
			</div>	
		</>
	);
};

export default MentorsCarousel;
