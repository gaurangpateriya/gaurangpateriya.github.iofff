/* eslint-disable no-unused-vars */
import React,{ useEffect, useState} from 'react';
import 'tachyons';
import Typist from 'react-typist';
// import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ScrollAnimation from 'react-animate-on-scroll';
import './AboutUs.css';

import topBg from '../../assets/Images/AboutUS/top-bg.jpg';
import profileAnalysis from '../../assets/Images/AboutUS/profileAnalysis.svg';
import interview from '../../assets/Images/AboutUS/interview.svg';

import code from '../../assets/Images/AboutUS/code.svg';



// import Course from './Course';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
// import { courses, } from '../../constants/data';

// import  MentorsCarousels from '../../common/components/MentorsCarousels';
import  TestimonialCarousel from '../../common/components/TestimonialCarousel';
// import { TypeWriterText } from '../../common/components/TypeWriterText';

function importAll(r) {
	return r.keys().map(r);
}

const texts = [
	
"Make Data Structures your bread and butter",
"Optimize, optimize and then optimize a bit more",
"Remember: Every complex problem has a simple solution",
"Talk English, Think Binary!",
"In an interview, don’t corner any case!",
"Be damn sure that you will get a job!",
]

const mentorsCompany = importAll(require.context('../../assets/Images/AboutUS/mentors_company/', false, /\.(png|jpe?g|svg)$/));

const AboutUs = ({college}) => {
	const [ activeIndex, setActiveIndex ] = useState([0]);

	const moveToNextText = () => {
		setActiveIndex((activeIndex+1)% texts.length)
	}
	const delayGenerator = (mean, std, {line, lineIdx, charIdx, defDelayGenerator}) => {
		// Delay the animation for 2 seconds at the last character of the first line
		if (lineIdx === 0 && charIdx === line.length - 1) {
		  return 2000;
		}
		if (lineIdx === 0 && charIdx < line.length -1) {
			return 50;
		}
		return defDelayGenerator();
	}

	const textComponents = texts.map((t,i) => (
		<Typist  className='animated-text'  onTypingDone={moveToNextText} key={i} delayGenerator={delayGenerator}	>
			{t}<Typist.Backspace count={t.length} delay={200} />
		</Typist>
	))

	
	
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
					<div  alt="" className='side-img' />
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
								
								{
									textComponents[activeIndex]
								}
								
							</div>
							
						</div>
						
					
					</div>
					
				</ScrollAnimation>
				{/* <ScrollAnimation animateOnce  animateIn="bounceInLeft">
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
				</ScrollAnimation> */}
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
						<ScrollAnimation animateOnce  animateIn='flipInY' className='detail border-left'> 
							<img src={code} alt=""/>
							<div className='content'>
							<h3>Crack The Code</h3>
							
							<p>
								Scale up your knowledge with in-depth knowledge of Advanced DSA, Dynamic Programming, Graphs, Backtracking, and other must-haves for your preliminary coding rounds.
							</p>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateOnce  animateIn='flipInX' className='detail border-right'> 
							
							<div className='content'>
								<h3>Mock Interviews</h3>
								<p>
								Experience different interview formats and identify your weak areas with 1:1 mock interviews. Gain insights on optimized coding, code complexity, and better design patterns/
								</p>
							</div>
							<img src={interview} alt='' />
						</ScrollAnimation>
						<ScrollAnimation animateOnce  animateIn='flipInY' className='detail border-left'> 
							<img src={profileAnalysis} alt='' />
							<div className='content'>
								<h3>Deep Profile Analysis</h3>
								<p>
									Get an expert analysis of your project with all the linked Q&A. Get a professional assessment, highlight your strong areas, and build an irresistible resume.
								</p>
							</div>
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
