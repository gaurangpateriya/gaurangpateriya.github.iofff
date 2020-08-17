/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'tachyons';
import { Link, useLocation } from 'react-router-dom';

import './PaymentPage.css';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { courses, } from '../../constants/data';
import TextField from '@material-ui/core/TextField';

import paymentLeftImg from '../../assets/Images/PaymentPage/paymentLeftImg.svg';

// TextField importAll(r) {
// 	return r.keys().map(r);
// }
  
// const mentorsCompany = importAll(require.context('../../assets/Images/AboutUS/mentors_company/', false, /\.(png|jpe?g|svg)$/));

const PaymentPage = (props) => {
	
	const [user, setuser] = useState({});
	const [course, setcourse] = useState({});
	const location = useLocation();
	useEffect(()=>{
		
		const { email, course } = location.state;
		setuser({...user,email});
		setcourse(course);
	},[]);
	const payForCourse = e =>{
		if(e){
			e.preventDefault();
		}
		const data = { 
			course,
			user
		};
		console.log(data);
	};
	return (
		<>
			<NavBar />
			<div className='payment-form-bg'>
				<div className='payment-form'>
					<div className='left-div'>
						{/* <img alt="" src={paymentLeftImg} /> */}
						<div className='content'>

							<h2>We are mission-driven, not money-driven</h2>
							<p>Same Day 100% Refund. No Questions.</p>
						</div>
					</div>
					<div className='right-div'>
						<form onSubmit={payForCourse}>
							<legend>Fill Your Details</legend>
							<input
								required
								// id="email"
								type='email'
								label="Enter Email"
								placeholder='Enter your email'
								variant="outlined"
								onChange={(e) => setuser({...user, email:e.target.value}) }
								value={user.email}
							
							/>
							<input
								required
								// id="email"
								type='text'
								label="Enter Name"
								placeholder='Enter your Name'
								variant="outlined"
								onChange={(e) => setuser({...user, name:e.target.value}) }
								value={user.name}
							
							/>
							<input
								required
								// id="email"
								type='number'
								label="Enter Mobile Number"
								placeholder='Enter your number'
								variant="outlined"
								onChange={(e) => setuser({...user, phone:e.target.value}) }
								value={user.phone}
							
							/>
							<div className='pricing-table'>
								<p>Payment Details</p>
								<table >
									<tr>
										<td className='heading'>{course.title}</td>
										<td>{`Rs. ${course.price}`}</td>
									</tr>
									{
										course.discPrice && course.discPrice !== course.price && (
											<tr>
												<td className='heading discount'>Special discount</td>
												<td className=' discount'>{`- Rs. ${course.price - course.discPrice}`}</td>
											</tr>
										)
									}
									<tr className='total-row'>
										<td className='heading'>Order Total</td>
										<td>{`Rs. ${course.discPrice}`}</td>
									</tr>
								</table>
							</div>
							<button type='submit'> Pay now </button>
						</form>
					
					</div>


				
			
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default PaymentPage;
