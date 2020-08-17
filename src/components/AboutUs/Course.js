import React,{ useState} from 'react';
import 'tachyons';
import './AboutUs.css';
import TextField from '@material-ui/core/Input';
import { Link, useHistory } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

import CollapseTransition from '../../common/components/CollapseTransition';

function Course({details}) {
	const [ showEmail, setShowEmail ] = useState(false);
	const [email, setEmail] = useState('');
	
	const history = useHistory();
	
	
	const applyForFree =(e) => {
		e.preventDefault();
		
		history.push('/payments',{email, course: details});
	};

	const stars = [];
	for( let i = 0; i< details.rating; i++){
		stars.push(<StarIcon/>);
	}
	return (
		
		<div className='course'  >
			<div className='heading' >
				<h4>{details.title}</h4>
			</div>
			<div className='sub-heading'>
				<div className=' content free-trial'>
					<h3>Try and decide</h3>
					<h2>1 Week Free Trial</h2>
					<p>(Excel in trial and earn scholarships)</p>
				</div>
				<div className='content'>
					<h3>Duration</h3>
					<h2>{details.duration} </h2>
					{/* <p>(Excel in trial and earn scholarships)</p> */}
				</div>
				<div className='content'>
					<h3>Rating</h3>
					<h2>{`${details.rating}/`}<small>5</small></h2>
					<span>{stars}</span>
				</div>
			</div>
	
					
			<ul className='benefit-list'>
				{
					details.benefits.map((benfit, index) => (
						<li key={index}>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="64" height="64"
								viewBox="0 0 172 172"
								style={{ fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}>
									<path d="M0,172v-172h172v172z" fill="none"></path>
									<g>
										<path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#ff8800"></path>
										<path d="M122.61719,44.34375h-73.23437c-2.78828,0 -5.03906,2.25078 -5.03906,5.03906v73.23438c0,2.78828 2.25078,5.03906 5.03906,5.03906h73.23438c2.78828,0 5.03906,-2.25078 5.03906,-5.03906v-73.23437c0,-2.78828 -2.25078,-5.03906 -5.03906,-5.03906z" fill="#ffffff"></path><path d="M131.88906,58.08359c-1.94844,-5.07266 -5.94609,-4.26641 -10.27969,-3.39297c-2.58672,0.5375 -14.10937,3.89687 -32.28359,23.1125c-7.55859,7.96172 -12.53047,14.31094 -15.82266,19.14844c-2.01562,-2.45234 -4.3,-5.10625 -6.71875,-7.49141c-7.42422,-7.42422 -15.72187,-12.53047 -16.05781,-12.73203c-3.46016,-2.11641 -7.99531,-1.04141 -10.14531,2.45234c-2.11641,3.46016 -1.04141,7.99531 2.41875,10.14531c0.06719,0.03359 7.18906,4.43438 13.30313,10.58203c6.24844,6.24844 11.92578,14.71406 11.99297,14.81484c1.37734,2.08281 3.69531,3.29219 6.14766,3.29219c0.40312,0 0.83984,-0.03359 1.27656,-0.10078c2.88906,-0.50391 5.17344,-2.65391 5.87891,-5.47578c0.03359,-0.06719 2.95625,-8.16328 18.37578,-24.42266c12.42969,-13.13516 20.72734,-17.30078 23.61641,-18.44297c0.03359,0 0.03359,0 0.10078,0c0,0 0.10078,-0.03359 0.26875,-0.13438c0.50391,-0.20156 0.77266,-0.26875 0.77266,-0.26875c-0.13437,0.03359 -0.20156,0.03359 -0.20156,0.03359v-0.03359c1.34375,-0.57109 3.82969,-1.64609 3.86328,-1.67969c3.72891,-1.6125 4.97187,-5.64375 3.49375,-9.40625z" fill="#ff8800">
										</path>
									</g>
								</g>
							</svg>
							{benfit}
						</li>
					))
				}
			</ul>
			
			<CollapseTransition visible={showEmail}>
				<form onSubmit={applyForFree}>
					<TextField
						required
						id="email"
						type='email'
						label="Enter Email"
						placeholder='Enter your email'
						variant="outlined"
						onChange={(e) => setEmail(e.target.value) }
						value={email}
						style={{width:'90%', margin:'10px'}}
					/>
					<div className='btns-div'>
						<span>
							<button className='apply-now' type="submit" >
								Apply Now
							</button>
							<button type="button" onClick={()=> setShowEmail(false) }>
								Close
							</button>
						</span>
					</div>
				</form>
				
			</CollapseTransition>
			<CollapseTransition visible={!showEmail}>
				<div className='btns-div'>

					<span>
						<button className='apply-now' type="button" onClick={()=> setShowEmail(true) }>
					Apply Now
						</button>
						<Link to={'/talk-to-mentor'}>
					 Talk to an advisor
						</Link>
					</span>
				
					<Link to={`/${details.title}`}>
						Learn more
					</Link>
				</div>
			</CollapseTransition>
				
				

			
			
		</div>
		
	);
}

export default Course;
