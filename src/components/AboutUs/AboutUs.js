/* eslint-disable no-unused-vars */
import React from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';

import './AboutUs.css';

import topBg from '../../assets/Images/AboutUS/top-bg.png';

import Course from './Course';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { courses, } from '../../constants/data';

import  MentorsCarousels from '../../common/components/MentorsCarousels';
import  TestimonialCarousel from '../../common/components/TestimonialCarousel';


const AboutUs = () => {
	
	
      
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
							<h2>Intern with us and escalate your career</h2>
							<p>Upskill with the world’s most effective project-based learning platform for developers.</p>
						
							<a href='/#product' >Become a skilled developer</a>
						
						</div>
						<img src={topBg} alt="" />
					</div>
				</div>
				
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
						<a href='/#product'> Internship </a>
						<a href='/#product'> Profession Certification </a>
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
				<TestimonialCarousel/>
			
				<Footer/>
			</div>
		</>
	);
};

export default AboutUs;
