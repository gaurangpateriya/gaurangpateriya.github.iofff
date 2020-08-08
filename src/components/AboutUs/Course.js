import React from 'react';
import 'tachyons';
import './AboutUs.css';
import { Link } from "react-router-dom";

import StarIcon from '@material-ui/icons/Star';
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import StarHalfIcon from '@material-ui/icons/StarHalf';

function Course({details}) {
	
	const stars = []
	for( let i = 0; i< details.rating; i++){
		stars.push(<StarIcon/>)
	}
	
	return (
		<>
			<a className='course' href={`/${details.title}`} >
				<div style={{backgroundImage:`url(${details.img})`}} className='img'>
					{/* <img src={details.img} alt=""/> */}
				</div>
				<div className='content'>
					<Link to={`/${details.title}`}>
						<h4>{details.title}</h4>
					</Link>
					
					<div className='rating' >
						<span>
							{stars}
							{/* {emptyStars} */}
						</span>
						<span>
							{details.rating}/5 
						</span>
					</div>
				</div>
			</a>
		</>
	);
}

export default Course;
