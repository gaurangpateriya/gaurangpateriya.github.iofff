/* eslint-disable no-unused-vars */
import React from 'react';
import 'tachyons';
// import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './AboutUs.css';

import topBg from '../../assets/Images/AboutUS/top-bg.png';
import profileAnalysis from '../../assets/Images/AboutUS/profileAnalysis.svg';
import interview from '../../assets/Images/AboutUS/interview.svg';
import crackInterview from '../../assets/Images/AboutUS/crackInterview.jpg';
import code from '../../assets/Images/AboutUS/code.svg';



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
							<h2>WANT TO CHAMPION YOUR PLACEMENTS?</h2>
							<p>Get 1-1 Live mentorship and in-depth interview preparation with  Super-Dream placed VIT alumni for a leap into your professional career.</p>
							<div className='flex items-center'>
								
								<Link to='/talk-to-mentor' >Schedule a call</Link>
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
						
						{
							mentorsCompany.map((t,i) => (
								<img src={t} key={i} alt=""  className='company-img' />	
										
							))    
						}
						
					</div>
				</div>
				<div className='programme-outline'>
					<div className='heading-div'>
						<p className='txt'>Programme Outline</p>
						<p className='watermark'>Programme</p>
					</div>
					<div className='outline-content'>
						<p>DP, Graphs, Advanced Data structure, Recursion, BackTracking, Competitive Coding , Interview Preps, Resume Building</p>
					</div>
					<div className='details-wrapper'>
						<div className='detail'> 
							<img src={code} alt=""/>
							<h3>Crack The Code</h3>
							<p className='content'>
								Scale up your knowledge with in-depth knowledge of Advanced DSA, Dynamic Programming, Graphs, Backtracking, and other must-haves for your preliminary coding rounds.
							</p>
						</div>
						<div className='detail'> 
							<img src={interview} alt='' />
							<h3>Mock Interviews</h3>
							<p className='content'>
							Experience different interview formats and identify your weak areas with 1:1 mock interviews. Gain insights on optimized coding, code complexity, and better design patterns/
							</p>
						</div>
						<div className='detail'> 
							<img src={profileAnalysis} alt='' />
							<h3>Deep Profile Analysis</h3>
							<p className='content'>
								 Get an expert analysis of your project with all the linked Q&A. Get a professional assessment, highlight your strong areas, and build an irresistible resume.

							</p>
						</div>

					</div>
				</div>
				<TestimonialCarousel/>
				<div className='what-will-it-cost-div'>
					<div className='content'>
						<h2>SO WHAT WILL IT COST?</h2>
						<ul>
							<li>₹0 deposit charges - Because we trust you!</li>
							<li>₹0 upfront fees - Because we are not into all that!</li>
							<li>Pay only if you get a CTC ₹8,00,000 and above - Because we win when you do!</li>
							<li>17% of your monthly salary for only first 6 months - Because we want to celebrate your achievement too!</li>
						</ul>
					</div>
				</div>
				{/* <div className="home-page-courses" id='product'>
					<div className='design' />

					
					<div className='heading-div'>
						<p className='txt'>
						Choose From Latest Program
						</p>
						<p className='watermark'>Programmes</p>
					</div>
					<div className='courses-container' >
						{
							courses.map( (c,i) => <Course details={c} key={i}/>)
						}
					</div>
				</div> */}
				<MentorsCarousels/>
				<div className='crack-interview-wrapper'>
					<div className='content-div'>
						<h2>WHAT IT TAKES TO CRACK THE HECK OUT OF AN INTERVIEW</h2>

					
						<ul>
							<li>Make Data Structures your bread and butter</li>
							<li>Optimize, optimize and then optimize a bit more</li>
							<li>Remember: Every complex problem has a simple solution</li>
							<li>Talk English, Think Binary!</li>
							<li>In an interview, don’t corner any case!</li>
							<li>Be damn sure that you will get placed!</li>
						</ul>
					</div>
					<div className='img-div'>
						{/* <img src={crackInterview} alt="" /> */}
					</div>


				</div>
				
				<div className='join-yav-container'>
					<small>	Break your goals into an achievable milestone</small>
					<h2> Join YAV Technologies Today!</h2>
					{/* <p>I am interested in</p> */}
					<div className='btn-div'>
						
						<Link to='/talk-to-mentor' >Schedule a call</Link>
					</div>

				</div>
			
				<Footer/>
			</div>
		</>
	);
};

export default AboutUs;
