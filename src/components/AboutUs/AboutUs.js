import React from 'react';
import 'tachyons';
import Slider from 'react-slick';
import './AboutUs.css';
import { APP_NAME } from '../../constants/otherConstants';

import creativity from '../../assets/Images/AboutUS/idea.svg';
import phone from '../../assets/Images/AboutUS/phone.svg';
import style_icon from '../../assets/Images/AboutUS/style_icon.svg';


import yash_sir_photo from '../../assets/Images/AboutUS/our_team/yash_sir_photo.jpeg';
import vaibhav_sir_photo from '../../assets/Images/AboutUS/our_team/vaibhav_sir_photo.png';
import gaurang_sir_photo from '../../assets/Images/AboutUS/our_team/gaurang_sir_photo.jpg';
import falcon_logo from '../../assets/Images/AboutUS/our_clients/falcon-city-logo.jpg';
import instalink_logo from '../../assets/Images/AboutUS/our_clients/instalink_logo.png';

// import TextInput from '../../common/components/TextInput';

const our_team = [
	{
		photo:yash_sir_photo,
		name:'Yash Prasad',
		designation: 'Founder',
		info: ''
	},
	{
		photo:vaibhav_sir_photo,
		name:'Vaibhav Prasad',
		designation: 'Co-Founder',
		info: ''
	},
	{
		photo:gaurang_sir_photo,
		name:'Gaurang Pateriya',
		designation: 'Senior Developer',
		info: ''
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
    
];
function AboutUs() {
	// console.log(our_team);
	const sendForm = (e) =>{
		e.preventDefault();
	};
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
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
		<>
			<div className="about-us-header" >
				<div className="tc">
					<h4>{APP_NAME}</h4>
					<h2>MEET OUR TEAM</h2>
					<p>We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.</p>
					<button type='button'>
						<a href='/#contact-us' >Contact US</a>
					</button>
                    
				</div>
			</div>
			<div className='about-us-middle-img'/>
			<div className='our-team-carousel'>
				<Slider {...settings}>
					{
						our_team.map((t,i) => (
							<div className='item' >
								<img src={t.photo} />
								<h3>{t.info}</h3>
								<h2>{t.name}</h2>
								<p>{t.designation}</p>
							</div>
						))    
					}
				</Slider>
			</div>
			<div className='about-us-third-content'>
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
                 
			</div>
			<div className='about-us-our-clients'>
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
			<div className='about-us-contact-us' id='contact-us'>
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
			</div>
		</>
	);
}

export default AboutUs;
