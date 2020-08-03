import React from 'react';
import 'tachyons';
import './AboutUs.css';

import StarIcon from '@material-ui/icons/Star';
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import StarHalfIcon from '@material-ui/icons/StarHalf';

function Course({details}) {
	
	return (
		<>
			<div className='course' >
				<img src={details.img} alt=""/>
				<div className='content'>
					<h4>{details.title}</h4>
					<div className='rating' >
						<span>
							<StarIcon/>
							<StarIcon/>
							<StarIcon/>
							<StarIcon/>
							<StarIcon/>
						</span>
						<span>
							{details.rating}/5 
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Course;
