
import yash_sir_photo from '../assets/Images/AboutUS/our_team/yash_sir_photo.jpeg';
import vaibhav_sir_photo from '../assets/Images/AboutUS/our_team/vaibhav_sir_photo.png';
import gaurang_sir_photo from '../assets/Images/AboutUS/our_team/gaurang_sir_photo.jpg';
import milind_ray from '../assets/Images/AboutUS/our_team/milind_ray.jpeg';
import nihar_patel from '../assets/Images/AboutUS/our_team/nihar_patel.jpg';

import athena_health from '../assets/Images/AboutUS/mentors_company/athena_health.png';
import Caterpillar from '../assets/Images/AboutUS/mentors_company/Caterpillar.png';
import DE_shaw from '../assets/Images/AboutUS/mentors_company/DE_shaw.png';
import logo from '../assets/Images/AboutUS/mentors_company/logo.png';
import pwc from '../assets/Images/AboutUS/mentors_company/pwc.png';

import chirag_agrawal from '../assets/Images/AboutUS/testimonials/chirag_agrawal.jpg';
import hemendra_sharma from '../assets/Images/AboutUS/testimonials/hemendra_sharma.jpg';
import sampreeth_miriyala from '../assets/Images/AboutUS/testimonials/sampreeth_miriyala.jpg';
import sai_teja from '../assets/Images/AboutUS/testimonials/sai_teja.jpg';
import shubhamPatel from '../assets/Images/AboutUS/testimonials/shubhamPatel.jpg';
import pranayNath from '../assets/Images/AboutUS/testimonials/pranayNath.jpg';
import adityaVyas from '../assets/Images/AboutUS/testimonials/adityaVyas.jpeg';

// import falcon_logo from '../assets/Images/AboutUS/our_clients/falcon-city-logo.jpg';
// import instalink_logo from '../assets/Images/AboutUS/our_clients/instalink_logo.png';


import reactImg from '../assets/Images/AboutUS/courses/react.png';
import djangoImg from '../assets/Images/AboutUS/courses/django.jpg';


export const our_team = [
	{
		photo:yash_sir_photo,
		name:'Yash Prasad',
		designation: 'MTS at Athenahealth Inc.',
		companyLogo:athena_health,
		linkedInURL:'https://www.linkedin.com/in/yash-prasad-262457128/',
		info: 'Yash has over 5 years of experience in full stack Website and App Development.He has experience of working in e​arly stage start-ups ​which have reached a valuation of ​10Cr​. He single handedly wrote the code for their entire website and reported directly to the CTO.He has also worked in product based companies which have more than 2​ 0 million users across the globe.'
	},
	{
		photo:vaibhav_sir_photo,
		linkedInURL:'https://www.linkedin.com/in/vaibhav-prasad-8278bb172/',
		companyLogo:DE_shaw,
		designation:'SDE at De Shaw & Co',
		name:'Vaibhav Prasad',
		info: 'Vaibhav being from a tier 2 college and not from some IIT or NIT still manage to get into Deshaw. Vaibhav’s vision is to make recruiters hire engineers based on their product development knowledge and not because of their IITian/NITian brand.'
	},
	{
		photo:gaurang_sir_photo,
		name:'Gaurang Pateriya',
		companyLogo:logo,
		designation: 'Technical Lead at YAV Technologies',
		linkedInURL: 'https://www.linkedin.com/in/gaurang-pateriya-b15290178/',
		info: 'I have started as an intern with YAV Technologies. Got Expert in full stack development under the guidance of Yash Prasad (sir) and now doing mentorship of new interns.'
	},
	{
		photo:milind_ray,
		name:'Milind Kar Ray',
		companyLogo:pwc,
		designation: 'PWC',
		linkedInURL:'https://www.linkedin.com/in/milind-kar-ray/',
		info: 'Milind works in the Cloud and Digital Practise for PriceWaterHouseCoopHe has over 3 years experience in Cloud Architecture Deployments and developing solution. He uses Django and Python back end for Web Development'
	},
	{
		photo:nihar_patel,
		name:'Nihar Patel ',
		companyLogo:Caterpillar,
		designation: 'Ex Caterpillar Inc',
		linkedInURL: 'https://www.linkedin.com/in/niharpatel1996/',
		info: 'Expertise in product development. Working towards IoT with BLE and WiFi. Software stack I work with: MERN'
	},
	
	
];
// export const our_clients = [
// 	{
// 		logo:instalink_logo,
// 		name:'Royal Trendies'
// 	},
// 	{
// 		logo:falcon_logo,
// 		name:'Prestige Falcon City'
// 	},
// 	{
// 		logo:instalink_logo,
// 		name:'Shoe Factory'
// 	},
// 	{
// 		logo:instalink_logo,
// 		name:'Naffs Creation'
// 	},
// 	{
// 		logo:instalink_logo,
// 		name:'S Younus Khadri '
// 	},
// ];

export const courses = [
	{
		id:0,
		img: reactImg,
		title:'Web & App Development',
		rating:'4',
		price: 3000 ,
		discPrice:2750,
		duration:'2 months',
		noOfRating: '1.1k',
		overview:`Throughout the course, you will gain hands-on experience by working on our flagship products, and by the end of this course, you will be prepared to build your own web applications as well as make mobile applications.
		 
		We at YAV are strong believers of execution and we focus primarily on that.`,
		studentsEnrolled: '1,400',
		discreption: 'In this internship you will take a deep dive into React fundamentals, covering all new React concepts including Redux. We do address some legacy features in case you’re working with an older codebase, but the majority of this course will focus on working with modern React. You will learn how to style your app, techniques for maintaining your app, and some more advanced concepts like performance optimization.',
		concepts:[
			{
				heading:'HTML5 + CSS3',
				discreption:'In this section, we will learn about HTML5 and CSS3.'
			},
			{
				heading:'Advanced Styling',
				discreption:'We will implement the HTML5 and CSS3 to design some cool and impressive designs.'
			},
			,
			{
				heading:'Introduction to Javascript',
				discreption:'In this section, we will learn about the background and importance of this language.'
			},
			{
				heading:'Advanced Javascript',
				discreption:'In this section, we will learn about the advanced features of the language.'
			},
			{
				heading:'Introduction to React',
				discreption:'In this section, we will learn about the React.js library.'
			},
			{
				heading:'Introduction to React-Router',
				discreption:'In this section, we will create a multiple page website using React-router.'
			},
			{
				heading:'Introduction to Redux',
				discreption:'In this section, we will learn about the central store and redux actions and dispatch.'
			},
			{
				heading:'REST Implementation',
				discreption:'In this section, we will learn about the connection with the REST service.'
			},
			
		],
		benefits:[
			'20 hours+ Mentor Support',
			'Flexible plans',
			'Certificate of Completion',
			'Real-world Projects',
			'Industry Specific Courses',
		]
	},
	{
		id:1,
		img: djangoImg,
		title:'Full stack Development',
		rating:'4.3',
		price: 3000 ,
		discPrice:2750,
		duration:'1 month',
		noOfRating: '13.5k',
		discreption:'In this internship you would be learning how to write scalable backend apis which are highly performant and have zero down time using the framework - Django. Language we would be writing the apis would be in python. The interns would get a chance to work on YAV technology’s flagship product, MyWeblink.',
		studentsEnrolled: '53,689',
		overview: `Interns daily responsiblities would involve. Back-end Developer duties and responsibilities
		* Be involved and participate in the overall application lifecycle
		* Main focus on coding and debugging
		* Collaborate with Front-end developers 
		* Define and communicate technical and design requirements
		* Provide training, help and support to other team members
		* Build high-quality reusable code that can be used in thew future
		* Develop functional and sustainable web applications with clean codes
		* Troubleshoot and debug applications
		* Learn about new technologies
		* Stay up to date with current best practices
		* Conduct UI tests and optimize performance
		* Manage cutting-edge technologies to improve applications
		* Collaborate with multidisciplinary team of designers, developers and system administrators
		* Participate in conferences and educational programs
		* Follow new and emerging technologies`,
		concepts:[
			{
				heading:'Introduction to Python',
				discreption:'In this section, we will learn about the background and importance of this language.'
			},
			{
				heading:'Introduction to Server development',
				discreption:'In this section, we will learn about the server and everything about backend.'
			},
			{
				heading:'Introduction to Django',
				discreption:'In this section, we will give the introduction to Django Framework and design the some great servers.'
			},
			{
				heading:'Introduction to MVT in Django',
				discreption:'In this section, we will learn about MVT structure of the Django and create a beautiful website.'
			},
			{
				heading:'Database Handling',
				discreption:'This module helps us learn Django views, templates, model layers; Ms SQL Basics'
			},
			{
				heading:'Introduction to REST Services',
				discreption:'In this section, we will learn about the REST services and micro services.'
			},
			{
				heading:'Implementation of Django REST Framework',
				discreption:'In this section, we will create a micro service with Django REST Framework.'
			}
		],
		benefits:[
			'20 hours+ Mentor Support',
			'Flexible plans',
			'Certificate of Completion',
			'Real-world Projects',
			'Industry Specific Courses',
		]

	},
	

];

export const testimonialData = [
	{
		photo:adityaVyas,
		name:'Aditya Vyas',
		linkedInURL: 'https://www.linkedin.com/in/aditya-vyas-862253183/',
		company:"Nielsen",
		package: "CTC more than 15 LPA",
		testimonial: `It was during the third year of my college that I came to know about YAV Technologies. Prior to that I was conflicted between placements or higher studies, and to be honest I wasn't too good at programming. But with some seriousness (which everyone experiences when the placements are close :p), I enrolled in the 2 month’s course at YAV Technologies, and that was THE PUSH that I needed. Not only were we taught the concepts of DS, a lot of stress was laid on using the concepts efficiently in problem solving.
		The resume builder and mock interview sessions were really very helpful, I realised it when the placement season started in my college. Being used to that experience by means of mock interviews, really helped me go the extra mile.
		From teachers to study material, everything about this program was praiseworthy and efficient.
		I am thankful to YAV Technologies for grooming me on every aspect of the campus placements and enabling me to secure a super dream offer from my college into Nielsen.
		`
	},
	{
		photo:pranayNath,
		name:'Pranay Nath',
		linkedInURL: 'https://www.linkedin.com/in/pranav-nath-566349150/',
		company:"OYO",
		package: "CTC more than 15 LPA",
		testimonial: 'YAV Technologies made me realise the importance of having a dream and working towards it. Not losing hope on a bad day, not getting too excited on a good day but working every day to turn your dream into reality.I got placed with a super dream offer into OYO.'
	},
	{
		photo:shubhamPatel,
		name:'Shubham Patel',
		company:"MIQ",
		package: "CTC more than 12 LPA",
		linkedInURL: 'https://www.linkedin.com/in/shubham-patel-45621a144/',
		testimonial: 'It was my first experience and i have learnt a loads from you all. The complete system is very wxciting and all help eqch others in resolving their problems .. especially the mentors who are available for helping us 24/7 ..I have learnt a basic understanding of how the website works and what is the level of programming needed and how to resolve the errors.... It is a great experience for me.'
	},
	// {
	// 	photo:chirag_agrawal,
	// 	name:'Chirag Agarwal',
	// 	linkedInURL: 'https://www.linkedin.com/in/chirag-agrawal-770488144',
	// 	testimonial: 'It was my first experience and i have learnt a loads from you alll. The complete system is very wxciting and all help eqch others in resolving their problems .. especially the mentors who are available for helping us 24/7 ..I have learnt a basic understanding of how the website works and what is the level of programming needed and how to resolve the errors.... It is a great experience for me.'
	// },
	// {
	// 	photo:sai_teja,
	// 	name:'Sai Teja',
	// 	linkedInURL: 'https://instagram.com/saiteja_278?igshid=rhm6up8a39ph',
	// 	testimonial: 'Flexible deadlines, always there to clear doubts in any aspect, good advices not only regarding web development but also various other aspects in the field of Computer science Really helped brush up my concepts on web development topics like React'
	// },
	// {
	// 	photo:hemendra_sharma,
	// 	name:'Hemendra  sharma',
	// 	linkedInURL: 'https://www.linkedin.com/in/hemendra-sharma-15725a194/',
	// 	testimonial: 'It was my first intenship and i learnt a lot . I worked in a lots of projects and mentors helped me alot . They guide me properly and I gain some real practical knowledge. I specially learned how to work in a team .This thing really helped me to gain skills and overall it was a really great experience.'
	// },
	// {
	// 	photo:sampreeth_miriyala,
	// 	name:'Sampreeth Miriyala',
	// 	linkedInURL: 'https://www.linkedin.com/in/sampreeth-miriyala-30bb02196/',
	// 	testimonial: 'As for now it is very good and started learning things.Started learning to manage time. Very good to be in the team.'
	// },
	
];