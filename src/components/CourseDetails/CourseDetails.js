import React, { useEffect, useState } from 'react';
import 'tachyons';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from 'react-slick';

import './CourseDetails.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import { courses } from '../../constants/data';

import  MentorsCarousels from '../../common/components/MentorsCarousels';
import  TestimonialCarousel from '../../common/components/TestimonialCarousel';
import  CollapseTransition from '../../common/components/CollapseTransition';

function importAll(r) {
	return r.keys().map(r);
}
  
const mentorsCompany = importAll(require.context('../../assets/Images/AboutUS/mentors_company/', false, /\.(png|jpe?g|svg)$/));
// const testimonial 
const CourseDetails = ({match}) => {
	
	// console.log(our_team);
	const [mobileView, setMobileView] = useState(true);
	const [courseDetails, setCourseDetails] = useState(courses[0]);
	const [activeConcept, setActiveConcept] = useState(-1);
	const stars = [];
	for( let i = 0; i< courseDetails.rating; i++){
		stars.push(<StarIcon/>);
	}
	
	useEffect(() => {
		window.addEventListener('resize',resize);
		const details = courses.filter( d => d.title === match.params.courseDetails);
		if( details.length > 0 ){
			setCourseDetails(details[0]);
		}
		return () => {
			window.removeEventListener('resize',resize);
		};
	},[]);

	const resize =(e) =>{
		setMobileView(window.innerWidth <= 600);
	};
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		variableWidth: true,
	};
      
	return (
		<div className='course-details'>
			<NavBar/>
			<div className='top-bg'>
				<div className='course-details-details-card'>
					<div className='left-div'>
						<div className='flex justify-between items-center flex-column flex-row-m'>
							<h1 className='course-title'>{courseDetails.title}</h1>
							<div className='price'>
								<b>
									{courseDetails.price}
								</b>
								<strike>
									{courseDetails.discPrice}
								</strike>
							</div>
						</div>
						<div className='flex justify-between items-center sub-heading'>
							<span>
								{stars}
							</span>
							<b>
								{`${courseDetails.rating}[${courseDetails.noOfRating} Ratings]`}
							</b>
						</div>
						<div className='flex justify-between items-center sub-heading'>
							<b>
								{`Duration: ${courseDetails.duration}`}
							</b>
							<p>
								{`${courseDetails.studentsEnrolled} + Students Enrolled`}
							</p>
						</div>
						<p className='discreption'>{courseDetails.discreption}</p>
						<ul className='benefit-list'>
							{
								courseDetails.benefits.map((benfit, index) => (
									<li>
										<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
											width="64" height="64"
											viewBox="0 0 172 172"
											style={{ fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}>
												<path d="M0,172v-172h172v172z" fill="none"></path>
												<g>
													<path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#ff8800"></path>
													<path d="M122.61719,44.34375h-73.23437c-2.78828,0 -5.03906,2.25078 -5.03906,5.03906v73.23438c0,2.78828 2.25078,5.03906 5.03906,5.03906h73.23438c2.78828,0 5.03906,-2.25078 5.03906,-5.03906v-73.23437c0,-2.78828 -2.25078,-5.03906 -5.03906,-5.03906z" fill="#ffffff"></path><path d="M131.88906,58.08359c-1.94844,-5.07266 -5.94609,-4.26641 -10.27969,-3.39297c-2.58672,0.5375 -14.10937,3.89687 -32.28359,23.1125c-7.55859,7.96172 -12.53047,14.31094 -15.82266,19.14844c-2.01562,-2.45234 -4.3,-5.10625 -6.71875,-7.49141c-7.42422,-7.42422 -15.72187,-12.53047 -16.05781,-12.73203c-3.46016,-2.11641 -7.99531,-1.04141 -10.14531,2.45234c-2.11641,3.46016 -1.04141,7.99531 2.41875,10.14531c0.06719,0.03359 7.18906,4.43438 13.30313,10.58203c6.24844,6.24844 11.92578,14.71406 11.99297,14.81484c1.37734,2.08281 3.69531,3.29219 6.14766,3.29219c0.40312,0 0.83984,-0.03359 1.27656,-0.10078c2.88906,-0.50391 5.17344,-2.65391 5.87891,-5.47578c0.03359,-0.06719 2.95625,-8.16328 18.37578,-24.42266c12.42969,-13.13516 20.72734,-17.30078 23.61641,-18.44297c0.03359,0 0.03359,0 0.10078,0c0,0 0.10078,-0.03359 0.26875,-0.13438c0.50391,-0.20156 0.77266,-0.26875 0.77266,-0.26875c-0.13437,0.03359 -0.20156,0.03359 -0.20156,0.03359v-0.03359c1.34375,-0.57109 3.82969,-1.64609 3.86328,-1.67969c3.72891,-1.6125 4.97187,-5.64375 3.49375,-9.40625z" fill="#ff8800"></path></g></g></svg>  {benfit}</li>
								))
							}
						</ul>
					</div>

				</div>
				
			</div>
			<div className='overview-div'>
				<div className='heading-div'>
					<p className='txt'>Overview</p>
					<p className='watermark'>Overview</p>
				</div>
				<div className='content'>
					{courseDetails.overview}
				</div>
			</div>
			<div className='our-mentor-companies-div'>
				<div className='heading-div'>
					<p className='txt'>Our Mentors Works At</p>
					<p className='watermark'>Mentors</p>
					
				</div>
				<div className='company-img-wrapper'>
					<Slider {...settings} >
						{
							mentorsCompany.map((t,i) => (
								<img src={t} key={i} alt=""  className='company-img' />	
										
							))    
						}
					</Slider>	
				</div>
			</div>
			<div className='concepts-div'>
				<div className='heading-div'>
					<p className='txt'>Concepts Covered</p>
					<p className='watermark'>Concepts</p>
				</div>
				<ul className='content'>
					{courseDetails.concepts.map((t, i) => (

						<li key={i}>
							<button className='header' type='button' onClick={() => setActiveConcept(i === activeConcept ? -1 : i)}>
								<h4>{t.heading}</h4>
								<ExpandMoreIcon/>
							</button>
							<CollapseTransition visible={activeConcept === i}>
								<p>{t.discreption}</p>
							</CollapseTransition>
						</li>
					))}
				</ul>
			</div>
			<MentorsCarousels/>
			<TestimonialCarousel/>
			<Footer/>
			
		</div>
	);
};

export default CourseDetails;
