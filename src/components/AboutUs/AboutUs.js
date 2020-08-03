import React, { useEffect, useState } from 'react';
import 'tachyons';
import Slider from 'react-slick';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './AboutUs.css';
import { APP_NAME } from '../../constants/otherConstants';

// import creativity from '../../assets/Images/AboutUS/idea.svg';
// import phone from '../../assets/Images/AboutUS/phone.svg';
// import style_icon from '../../assets/Images/AboutUS/style_icon.svg';
import topBg from '../../assets/Images/AboutUS/top-bg.png';


import yash_sir_photo from '../../assets/Images/AboutUS/our_team/yash_sir_photo.jpeg';
import vaibhav_sir_photo from '../../assets/Images/AboutUS/our_team/vaibhav_sir_photo.png';
import gaurang_sir_photo from '../../assets/Images/AboutUS/our_team/gaurang_sir_photo.jpg';
import saumya_mehta from '../../assets/Images/AboutUS/our_team/saumya_mehta.jpeg';
import yash_dhoka from '../../assets/Images/AboutUS/our_team/yash_dhoka.jpeg';
import savio_barla from '../../assets/Images/AboutUS/our_team/savio_barla.jpeg';
import sanya_aneja from '../../assets/Images/AboutUS/our_team/sanya_aneja.jpeg';


import falcon_logo from '../../assets/Images/AboutUS/our_clients/falcon-city-logo.jpg';
import instalink_logo from '../../assets/Images/AboutUS/our_clients/instalink_logo.png';

import ai from '../../assets/Images/AboutUS/courses/ai.png';

import Course from './Course';
// import TextInput from '../../common/components/TextInput';

const our_team = [
	{
		photo:yash_sir_photo,
		name:'Yash Prasad',
		designation: 'Founder',
		info: 'Id do minim ipsum officia ea esse velit deserunt. Fugiat consequat eiusmod enim qui aliquip duis amet quis occaecat consectetur laboris esse. Adipisicing ea ad dolore voluptate non aliqua ex pariatur esse. Adipisicing dolore do dolor proident ex minim.'
	},
	{
		photo:vaibhav_sir_photo,
		name:'Vaibhav Prasad',
		designation: 'Co-Founder',
		info: 'Ex officia Lorem duis sit esse enim aute ipsum sint in. Aute do sit veniam nostrud. Nulla veniam cupidatat aliquip do sunt ex aliquip pariatur officia velit eu officia veniam. Officia et do minim magna cillum eu aliquip deserunt sit incididunt occaecat culpa. Deserunt non eiusmod do do sit quis magna excepteur occaecat laboris et quis sunt cillum.'
	},
	{
		photo:gaurang_sir_photo,
		name:'Gaurang Pateriya',
		designation: 'Technical Lead',
		info: 'Excepteur cillum ipsum sit ex nostrud in laborum adipisicing eu laboris laboris sit in Lorem. Aute non adipisicing in velit sunt laboris enim anim velit pariatur incididunt anim. Aute ad dolor sit eiusmod excepteur eiusmod cupidatat culpa ut irure. Laborum incididunt qui magna ex esse. Reprehenderit consectetur enim mollit amet irure duis nisi sunt deserunt adipisicing eu. Aute excepteur amet dolor consequat irure dolor sunt commodo excepteur cillum consectetur ea. Non nulla excepteur consectetur ad cupidatat dolor incididunt culpa enim laboris minim duis occaecat voluptate.'
	},
	{
		photo:sanya_aneja,
		name:'Sanya Aneja',
		designation: 'Marketing Lead',
		info: 'Occaecat reprehenderit eu anim aute culpa laborum. Occaecat commodo officia cillum est sint nostrud commodo irure amet eiusmod mollit adipisicing. Ea amet dolore irure reprehenderit laboris nisi nulla ad in ullamco cillum nostrud id enim. Pariatur velit proident laborum tempor commodo commodo nulla non. Quis enim veniam velit ex culpa voluptate nulla commodo. Excepteur irure amet Lorem non deserunt.'
	},
	{
		photo:saumya_mehta,
		name:'Saumya Mehta',
		designation: 'Seo Strategist',
		info: 'Lorem ea Lorem deserunt cillum aliqua consequat ad reprehenderit nisi officia. Sunt minim nostrud enim cupidatat quis laboris aute ullamco excepteur est occaecat aute officia. Deserunt deserunt irure culpa sit eu exercitation minim ex incididunt consectetur incididunt Lorem. Consectetur non Lorem anim officia fugiat pariatur nulla.'
	},
	{
		photo:yash_dhoka,
		name:'Yash Dhoka',
		designation: 'Associate Sales Manager',
		info: 'Culpa adipisicing do ullamco cupidatat sint excepteur sunt. Incididunt ullamco fugiat officia ullamco dolore nisi quis occaecat magna excepteur ullamco ex. Exercitation amet incididunt ut deserunt sit proident cillum. Magna elit nulla mollit ullamco magna ex eu in nulla sunt elit excepteur et ipsum. Aliquip dolore elit commodo excepteur ad ad aliqua adipisicing in ea officia. Culpa fugiat officia ut sit incididunt pariatur officia est sint nisi quis minim reprehenderit mollit. Pariatur tempor cupidatat ut est nostrud incididunt magna fugiat consectetur.'
	},
	{
		photo:savio_barla,
		name:'Savio Barla',
		designation: 'Digital Marketing Lead',
		info: 'Aliqua nostrud voluptate ad exercitation aute amet veniam magna officia deserunt. Id incididunt aliqua veniam eiusmod. Sunt eu sint labore aliqua fugiat.'
	},
	
];
const our_clients = [
	{
		logo:instalink_logo,
		name:'Royal Trendies'
	},
	{
		logo:falcon_logo,
		name:'Prestige Falcon City'
	},
	{
		logo:instalink_logo,
		name:'Shoe Factory'
	},
	{
		logo:instalink_logo,
		name:'Naffs Creation'
	},
	{
		logo:instalink_logo,
		name:'S Younus Khadri '
	},
];

const courses = [
	{
		img:ai,
		title:'Artificial intelligence',
		rating:'4'
	},
	{
		img:ai,
		title:'Artificial intelligence',
		rating:'4'
	},
	{
		img:ai,
		title:'Artificial intelligence',
		rating:'4'
	},

];

const testimonialData = [
	{
		photo:yash_sir_photo,
		name:'Yash Prasad',
		linkedInURL: 'Founder',
		testimonial: 'Id do minim ipsum officia ea esse velit deserunt. Fugiat consequat eiusmod enim qui aliquip duis amet quis occaecat consectetur laboris esse. Adipisicing ea ad dolore voluptate non aliqua ex pariatur esse. Adipisicing dolore do dolor proident ex minim.'
	},
	{
		photo:vaibhav_sir_photo,
		name:'Vaibhav Prasad',
		linkedInURL: 'Co-Founder',
		testimonial: 'Ex officia Lorem duis sit esse enim aute ipsum sint in. Aute do sit veniam nostrud. Nulla veniam cupidatat aliquip do sunt ex aliquip pariatur officia velit eu officia veniam. Officia et do minim magna cillum eu aliquip deserunt sit incididunt occaecat culpa. Deserunt non eiusmod do do sit quis magna excepteur occaecat laboris et quis sunt cillum.'
	},
	{
		photo:gaurang_sir_photo,
		name:'Gaurang Pateriya',
		linkedInURL: 'Technical Lead',
		testimonial: 'Excepteur cillum ipsum sit ex nostrud in laborum adipisicing eu laboris laboris sit in Lorem. Aute non adipisicing in velit sunt laboris enim anim velit pariatur incididunt anim. Aute ad dolor sit eiusmod excepteur eiusmod cupidatat culpa ut irure. Laborum incididunt qui magna ex esse. Reprehenderit consectetur enim mollit amet irure duis nisi sunt deserunt adipisicing eu. Aute excepteur amet dolor consequat irure dolor sunt commodo excepteur cillum consectetur ea. Non nulla excepteur consectetur ad cupidatat dolor incididunt culpa enim laboris minim duis occaecat voluptate.'
	},
	{
		photo:sanya_aneja,
		name:'Sanya Aneja',
		linkedInURL: 'Marketing Lead',
		testimonial: 'Occaecat reprehenderit eu anim aute culpa laborum. Occaecat commodo officia cillum est sint nostrud commodo irure amet eiusmod mollit adipisicing. Ea amet dolore irure reprehenderit laboris nisi nulla ad in ullamco cillum nostrud id enim. Pariatur velit proident laborum tempor commodo commodo nulla non. Quis enim veniam velit ex culpa voluptate nulla commodo. Excepteur irure amet Lorem non deserunt.'
	},
	{
		photo:saumya_mehta,
		name:'Saumya Mehta',
		linkedInURL: 'Seo Strategist',
		testimonial: 'Lorem ea Lorem deserunt cillum aliqua consequat ad reprehenderit nisi officia. Sunt minim nostrud enim cupidatat quis laboris aute ullamco excepteur est occaecat aute officia. Deserunt deserunt irure culpa sit eu exercitation minim ex incididunt consectetur incididunt Lorem. Consectetur non Lorem anim officia fugiat pariatur nulla.'
	},
	{
		photo:yash_dhoka,
		name:'Yash Dhoka',
		linkedInURL: 'Associate Sales Manager',
		testimonial: 'Culpa adipisicing do ullamco cupidatat sint excepteur sunt. Incididunt ullamco fugiat officia ullamco dolore nisi quis occaecat magna excepteur ullamco ex. Exercitation amet incididunt ut deserunt sit proident cillum. Magna elit nulla mollit ullamco magna ex eu in nulla sunt elit excepteur et ipsum. Aliquip dolore elit commodo excepteur ad ad aliqua adipisicing in ea officia. Culpa fugiat officia ut sit incididunt pariatur officia est sint nisi quis minim reprehenderit mollit. Pariatur tempor cupidatat ut est nostrud incididunt magna fugiat consectetur.'
	},
	{
		photo:savio_barla,
		name:'Savio Barla',
		linkedInURL: 'Digital Marketing Lead',
		testimonial: 'Aliqua nostrud voluptate ad exercitation aute amet veniam magna officia deserunt. Id incididunt aliqua veniam eiusmod. Sunt eu sint labore aliqua fugiat.'
	},
	
];

// const testimonial 
const AboutUs = () => {
	// console.log(our_team);
	const [mobileView, setMobileView] = useState(true);
	useEffect(() => {
		window.addEventListener('resize',resize);
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
		autoplay: false,
		autoplaySpeed: 2000,
		variableWidth: true,
		variableHeight: true,
	};
	const testimonialSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		variableWidth: true,
	};
	const ourClientSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1000,
	};
      
	return (
		<div className=''>
			<div className='bgimg'>
				<div className="home-page-header" >
				
					<div className="content">
						<h2>Work on exciting tech projects, Learn key developer skills</h2>
						<p>Upskill with the world’s most effective project-based learning platform for developers.</p>
						<button type='button'>
							<a href='/#contact-us' >Become a skilled developer</a>
						</button>
					</div>
					<img src={topBg} alt="" />
				</div>
			</div>
			{/* <div className='home-page-middle-img'/> */}
			<div className="home-page-courses">
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
			<div className='join-yav-container'>
				<small>	Break your goals into an achievable milestone</small>
				<h2> Join Verzeo Today!</h2>
				<p>I am interested in</p>
				<div className='btn-div'>
					<button type="button"> Internship </button>
					<button type="button"> Profession Certification </button>
				</div>

			</div>
			{/* <div className='home-page-third-content'>
				<div className='content'>
					<div className='icon'>
						<img src ={creativity} alt=''/>
						<h3>Creativity</h3>
						<p>It's the ability to think outside the box. We make decisions, create something new and generate a lot of ideas.</p>
					</div>
				</div>
				<div className='content'>
					<div className='icon'>
						<img src ={phone} alt=''/>
						<h3>Mobile Friendly</h3>
						<p>{`All Projects made with ${APP_NAME} are mobile-friendly. You don't have to create a special mobile version of your site.`}</p>
					</div>
				</div>
				<div className='content'>
					<div className='icon'>
						<img src ={style_icon} alt=''/>
						<h3>Unique Styles</h3>
						<p>{`${APP_NAME} offers many site in several themes, and though these sites are from same company, they are one of its kind.`}</p>
					</div>
				</div>
                 
			</div> */}
			<div className='home-page-our-clients'>
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
			
			<div className='testimonial-carousel'>
				<h1 className='heading'>
				Testimonials
				</h1>
		
				<Slider {...testimonialSettings} >
					{
						testimonialData.map((t,i) => (
							<div className='mentor' style={{width: Math.min(window.innerWidth- 20, 300)}} >
								<div className='quote-svg'>
									<FormatQuoteIcon/>
								</div>
								<div className='discreption'>
									 <p> {t.testimonial} </p>
								</div>
								<div className='header'>
									<img src={t.photo} alt="" />	
								</div>
								
								<div className='heading'>
									<div className='name'>
										<LinkedInIcon />
										<p>{t.name}</p>
									</div>
								</div>
									
								
							</div>
						))    
					}
				</Slider>
			</div>
			
			<div className='reach-us-div'>
				<div className='content'>
					<EmailIcon />
					<p>Email</p>
					<p>support@yavtechnologies.com</p>
				</div>
				 
				<div className='content'>
					<PhoneIcon />
					<p>Call Us</p>
					<p>+91-8360682123   +91-9019031739</p>
				</div>
				<div className='content'>
					<LocationOnIcon />
					<p>Reach Us</p>
					<p>2nd Floor, Building No. L-367, 5th Main Road, Sector 6, HSR Layout, Bengaluru, Karnataka, 560102.</p>
				</div>
			</div>
			{/* <div className='home-page-contact-us' id='contact-us'>
				<h2>CONTACT US</h2>
				<form onSubmit={sendForm}>
					<div className='flex-input'>
						<div className='flex flex-column'>
						    <label>Name</label><input />
						</div>
						<div className='flex flex-column'>
						    <label>Email</label><input />
						</div>
						<div className='flex flex-column'>
						    <label>Phone</label><input />
						</div>
					</div>
					
					<div className='flex flex-column'>
						<label>Message</label><textarea  />
					</div>
					
					<button type='submit'>
                        Send form
					</button>
				</form>
			</div> */}
		</div>
	);
};

export default AboutUs;
