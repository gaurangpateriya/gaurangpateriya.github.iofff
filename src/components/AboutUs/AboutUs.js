/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'tachyons';
import Typist from 'react-typist';
// import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';
import './AboutUs.css';

import work from '../../assets/Images/AboutUS/work.svg';
import quants from '../../assets/Images/AboutUS/quants.png';
import design from '../../assets/Images/AboutUS/design.svg';
import backend from '../../assets/Images/AboutUS/backend.png';
import concept from '../../assets/Images/AboutUS/concept.svg';
import interview from '../../assets/Images/AboutUS/interview.png';

import PaymentStructure from './PaymentStructure';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import TestimonialCarousel from '../../common/components/TestimonialCarousel';

function importAll(r) {
  return r.keys().map(r);
}

const texts = [
  'Make Data Structures your bread and butter',
  'Optimize, optimize and then optimize a bit more',
  'Remember: Every complex problem has a simple solution',
  'Talk English, Think Binary!',
  'In an interview, don’t corner any case!',
  'Be damn sure that you will get a job!',
];

const mentorsCompany = importAll(
  require.context(
    '../../assets/Images/AboutUS/mentors_company/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const AboutUs = ({ college }) => {
  const [activeIndex, setActiveIndex] = useState([0]);
  const [costStructure, setCostStructure] = useState([0]);

  const moveToNextText = () => {
    setActiveIndex((activeIndex + 1) % texts.length);
  };
  const delayGenerator = (
    mean,
    std,
    { line, lineIdx, charIdx, defDelayGenerator }
  ) => {
    // Delay the animation for 2 seconds at the last character of the first line
    if (lineIdx === 0 && charIdx === line.length - 1) {
      return 2000;
    }
    if (lineIdx === 0 && charIdx < line.length - 1) {
      return 50;
    }
    return defDelayGenerator();
  };

  const textComponents = texts.map((t, i) => (
    <Typist
      className='animated-text'
      onTypingDone={moveToNextText}
      key={i}
      delayGenerator={delayGenerator}
    >
      {t}
      <Typist.Backspace count={t.length} delay={200} />
    </Typist>
  ));

  return (
    <>
      <Helmet>
        <title>YAV</title>
        <meta
          name='description'
          content='Intern with us and escalate your career. Upskill with the world’s most effective project-based learning platform for developers.'
        />
        <meta
          name='keywords '
          content='college internship, software internship, placement training, jobs, placements, training'
        />
      </Helmet>
      <NavBar />
      <div className=''>
        <ScrollAnimation animateOnce animateIn='bounceInRight'>
          <div className='bgimg'>
            <div alt='' className='side-img' />
            <div className='home-page-header'>
              <div className='content'>
                <h2>WANT TO GET YOUR DREAM JOB ?</h2>
                <p>
                  {college === 'vit'
                    ? 'Get 1-1 Live mentorship from Super-Dream placed VIT alumni.'
                    : 'Get 1-1 Live mentorship from industry experts working in product-based companies.'}
                </p>
                <div className='flex items-center'>
                  <Link to='/talk-to-mentor'>Schedule a call</Link>
                </div>

                {textComponents[activeIndex]}
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
        <ScrollAnimation animateOnce animateIn='fadeIn'>
          <div className='our-mentor-companies-div'>
            <ScrollAnimation
              animateOnce
              animateIn='fadeIn'
              className='heading-div'
            >
              <p className='txt'>Our Mentors Work At</p>
              <p className='watermark'>Mentors</p>
            </ScrollAnimation>
            <div className='company-img-wrapper'>
              {mentorsCompany.map((t, i) => (
                <img src={t} key={i} alt='' className='company-img' />
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <div className='programme-outline'>
          <ScrollAnimation
            animateOnce
            animateIn='fadeIn'
            className='heading-div'
          >
            {/* <p className='txt'>Programme Outline</p>
						<p className='watermark'>Programme</p> */}
            <h2>Programme Outline</h2>
            {/* <ul  >
							<li># Very Small batches </li>
							<li># No Recorded material </li>
							<li># Highly affordable </li>
							<li># Project and Assignment based Learning </li>
							<li># Online Mentoring Sessions </li>
						</ul> */}
          </ScrollAnimation>
          {/* <div className='outline-content'>
						<p>DP, Graphs, Advanced Data structure, Recursion, BackTracking, Competitive Coding , Interview Preps, Resume Building</p>
					</div> */}
          <div className='details-wrapper'>
            <ScrollAnimation
              animateOnce
              animateIn='flipInY'
              className='detail border-left'
              number='1.'
            >
              <img src={concept} alt='' />
              <div className='content'>
                <h3>Concept Building</h3>

                <p>
                  Scale up your knowledge with in-depth focus on Basic and
                  Advanced Data Structures, Algorithm Optimization, Bit
                  Manipulation, Dynamic Programming, Recursion and Backtracking
                  to ace your initial coding rounds.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn='flipInX'
              className='detail border-right'
            >
              <div className='content'>
                <h3>Professional Frontend Skills</h3>
                <p>
                  Start off with Basic and Advanced Javascript concepts,
                  including into Events, Closure, Async/Await. Get well versed
                  with web development using JS and complex concepts like
                  Redux/Middlewares. Gain confidence in working with Git and
                  deploying build on Azure / AWS.
                </p>
              </div>
              <img src={design} alt='' />
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn='flipInY'
              className='detail border-left'
            >
              <img src={backend} alt='' />
              <div className='content'>
                <h3>Professional Backend Skills</h3>
                <p>
                  Work on learning system design. Play with RDBMS with focus on
                  SQL. Step into the world of Node JS / Express framework.
                  Schedule Cron jobs, dabble with REST APIs. Gain insights into
                  error logging mechanisms and writing unit tests cases.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn='flipInY'
              className='detail border-right'
            >
              <div className='content'>
                <h3>Quants</h3>

                <p>
                  Get drilled and grilled by improving your mathematical skills
                  for those mathematical rounds in companies. Learn the
                  concepts, improve your speed, learn shortcuts, and solve
                  better than everyone else.
                </p>
              </div>
              <img src={quants} alt='' />
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn='flipInX'
              className='detail border-left'
            >
              <img src={work} alt='' />
              <div className='content'>
                <h3>Internship</h3>
                <p>
                  Get an in-house internship program and work on some amazing
                  industry-level projects and systems that are being used by
                  others. Add it into your resume and flaunt it for others to
                  envy.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn='flipInY'
              className='detail border-right'
            >
              <div className='content'>
                <h3>Mock Interviews</h3>
                <p>
                  Get exposed to tons and tons of interview styles and formats.
                  Be interviewed by established developers working in De Shaw,
                  Morgan Stanley, Flipkart, PwC, Walmart, Bank of America and
                  many more. Identify your weak areas with 1:1 mock interviews.
                  Gain insights to optimized approaches, code complexity and
                  better design patterns. Getting deep level insights on your
                  projects and several tips to crack that interview!
                </p>
              </div>
              <img src={interview} alt='' />
            </ScrollAnimation>
          </div>
        </div>
        <TestimonialCarousel />
        <PaymentStructure college={college} />
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
          <ScrollAnimation animateOnce animateIn='tada'>
            <h2> Join YAV Technologies Today!</h2>
          </ScrollAnimation>
          <div className='btn-div'>
            <Link to='/talk-to-mentor'>Schedule a call</Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
