/* eslint-disable no-unused-vars */
import React from 'react';
import 'tachyons';
// import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ScrollAnimation from 'react-animate-on-scroll';
import './AboutUs.css';

import topBg from '../../assets/Images/AboutUS/top-bg.png';
import profileAnalysis from '../../assets/Images/AboutUS/profileAnalysis.svg';
import interview from '../../assets/Images/AboutUS/interview.svg';

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

const AboutUs = ({college}) => {
	
	return (
		<>
			<Helmet>
				<title>YAV</title>
				<meta name="description" content="Intern with us and escalate your career. Upskill with the world’s most effective project-based learning platform for developers." />
				<meta name="keywords " content="college internship, software internship, placement training, jobs, placements, training" />
			</Helmet>
			<NavBar />
			<div className=''>
				<ScrollAnimation animateOnce  animateIn="bounceInRight">
					<div className='bgimg'>
						<div className="home-page-header" >
				
							<div className="content">
								<h2>WANT TO GET YOUR DREAM JOB ?</h2>
								<p>
									{
										college === 'vit' 
											? 'Get 1-1 Live mentorship from Super-Dream placed VIT alumni.'
											: 'Get 1-1 Live mentorship from industry experts working in product-based companies.'
									}
								</p>
								<div className='flex items-center'>
								
									<Link to='/talk-to-mentor' >Schedule a call</Link>
								</div>
							</div>
							<img src={topBg} alt="" />
						</div>
					
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateOnce  animateIn="bounceInLeft">
					<div className='crack-interview-wrapper'>
						<ScrollAnimation animateOnce  animateIn='bounceInRight' className='content-div'>
							<h2>WHAT IT TAKES TO CRACK THE HECK OUT OF AN INTERVIEW</h2>
							<ul>
								<li>Make Data Structures your bread and butter</li>
								<li>Optimize, optimize and then optimize a bit more</li>
								<li>Remember: Every complex problem has a simple solution</li>
								<li>Talk English, Think Binary!</li>
								<li>In an interview, don’t corner any case!</li>
								<li>Be damn sure that you will get a job!</li>
							</ul>
						</ScrollAnimation>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateOnce  animateIn='fadeIn'>
					<div className='our-mentor-companies-div'>
						<ScrollAnimation animateOnce  animateIn='fadeIn' className='heading-div'>
							<p className='txt'>Our Mentors Work At</p>
							<p className='watermark'>Mentors</p>
						</ScrollAnimation>
						<div className='company-img-wrapper'>
							{
								mentorsCompany.map((t,i) => (
									<img src={t} key={i} alt=""  className='company-img' />	
										
								))    
							}
						</div>
					</div>
				</ScrollAnimation>
				<div className='programme-outline'>
					<ScrollAnimation animateOnce  animateIn='fadeIn' className='heading-div'>
						<p className='txt'>Programme Outline</p>
						<p className='watermark'>Programme</p>
					</ScrollAnimation>
					{/* <div className='outline-content'>
						<p>DP, Graphs, Advanced Data structure, Recursion, BackTracking, Competitive Coding , Interview Preps, Resume Building</p>
					</div> */}
					<div className='details-wrapper'>
						<ScrollAnimation animateOnce  animateIn='flipInY' className='detail'> 
							<img src={code} alt=""/>
							<h3>Crack The Code</h3>
							<p className='content'>
								Scale up your knowledge with in-depth knowledge of Advanced DSA, Dynamic Programming, Graphs, Backtracking, and other must-haves for your preliminary coding rounds.
							</p>
						</ScrollAnimation>
						<ScrollAnimation animateOnce  animateIn='flipInX' className='detail'> 
							<img src={interview} alt='' />
							<h3>Mock Interviews</h3>
							<p className='content'>
							Experience different interview formats and identify your weak areas with 1:1 mock interviews. Gain insights on optimized coding, code complexity, and better design patterns/
							</p>
						</ScrollAnimation>
						<ScrollAnimation animateOnce  animateIn='flipInY' className='detail'> 
							<img src={profileAnalysis} alt='' />
							<h3>Deep Profile Analysis</h3>
							<p className='content'>
								 Get an expert analysis of your project with all the linked Q&A. Get a professional assessment, highlight your strong areas, and build an irresistible resume.

							</p>
						</ScrollAnimation>

					</div>
				</div>
				<TestimonialCarousel/>
				{
					college !== 'mis' && (
						<ScrollAnimation animateOnce  animateIn='bounceInLeft' className='what-will-it-cost-div'>
							<h2>SO WHAT WILL IT COST?</h2>
							<ul>
								<li>
									<CreditCardIcon />
									<b>₹0 deposit charges</b>
									<p>Because we trust you!</p>
								</li>
								<li>
									<CardGiftcardIcon/>
									<b>₹0 upfront fees </b>
									<p>Because we are not into all that!</p>
								</li>
								<li>
									<LocalAtmIcon />
									<b>
										{
											college === 'vit' 
												? 'Pay only if you get a CTC ₹8,00,000 and above'
												: 'Pay only if you get a job'
										}
									</b>
									<p> Because we win when you do!</p>
								</li>
								<li>
									<CheckCircleRoundedIcon />
									<b>17% of your monthly salary for only first 6 months</b>
									<p> Because we want to celebrate your achievement too!</p>
								</li>
							</ul>
						
							
						</ScrollAnimation>
					)
				}
				
				{/* <div className="home-page-courses" id='product'>
					<div className='design' />

					
					<ScrollAnimation animateOnce  animateIn='fadeIn' className='heading-div'>
						<p className='txt'>
						Choose From Latest Program
						ScrollAnimation>
						<p className='watermark'>Programmes</p>
					</div>
					<div className='courses-container' >
						{
							courses.map( (c,i) => <Course details={c} key={i}/>)
						}
					</div>
				</div> */}
				{/* <MentorsCarousels/> */}
				
				<div className='join-yav-container'>
					{/* <small>	Break your goals into an achievable milestone</small> */}
					<ScrollAnimation animateOnce  animateIn='tada'>
						<h2> Join YAV Technologies Today!</h2>
					</ScrollAnimation>
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
