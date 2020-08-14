/* eslint-disable no-unused-vars */
import React from 'react';
import 'tachyons';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

import './AboutUs.css';

import topBg from '../../assets/Images/AboutUS/top-bg.png';

import Course from './Course';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { courses, } from '../../constants/data';

import  MentorsCarousels from '../../common/components/MentorsCarousels';
import  TestimonialCarousel from '../../common/components/TestimonialCarousel';

function importAll(r) {
	return r.keys().map(r);
}
  
const mentorsCompany = importAll(require.context('../../assets/Images/AboutUS/mentors_company/', false, /\.(png|jpe?g|svg)$/));

const AboutUs = () => {
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
		<>
			<Helmet>
				<title>YAV</title>
				<meta name="description" content="Intern with us and escalate your career. Upskill with the world’s most effective project-based learning platform for developers." />
				<meta name="keywords " content="college internship, software internship, placement training, jobs, placements, training" />
			</Helmet>
			<NavBar />
			<div className=''>
				<div className='bgimg'>
					<div className="home-page-header" >
				
						<div className="content">
							<h2>Get placement ready with 1:1 mentorship program with industry experts</h2>
							<p>Learn through real-world problems and an amazing internship program to impress your recruiters.</p>
							<div className='flex items-center'>
								<a href='/#product' >Start a free trial</a>
								<a href='/#product' >Talk to a mentor</a>
							</div>
						</div>
						<img src={topBg} alt="" />
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

				<TestimonialCarousel/>

				<div className="home-page-courses" id='product'>
					<div className='heading'>
						<h2 className='heading'>
						Choose From Latest Program
						</h2>
					</div>
					<div className='courses-container' >
						{
							courses.map( (c,i) => <Course details={c} key={i}/>)
						}
					</div>
				</div>
				<MentorsCarousels/>
				
				<div className='join-yav-container'>
					<small>	Break your goals into an achievable milestone</small>
					<h2> Join YAV Technologies Today!</h2>
					<p>I am interested in</p>
					<div className='btn-div'>
						<a href='/#product'> Internships </a>
						<a href='/#product'> Professional Certification </a>
					</div>

				</div>

				{/* <div className='home-page-our-clients'>
					<h2>Our Clients</h2>
					<h3>Thank you for choosing us!</h3>
					<div className='carousel'>
						<Slider {...ourClientSettings}>
							{
								our_clients.map((t,i) => (
									<div className='item' >
										<img src={t.logo} />
								
										<h2>{t.name}</h2>
								
									</div>
								))    
							}
						</Slider>
					</div>
				</div>
			 */}
				
			
				<Footer/>
			</div>
		</>
	);
};

export default AboutUs;
