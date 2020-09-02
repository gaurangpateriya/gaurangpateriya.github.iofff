import React, { useState } from 'react';
import { APP_NAME, APP_NAME_short } from '../../constants/otherConstants';
import NavBar from '../NavBar/NavBar';
import LoginImage from '../../assets/Images/AboutUS/login.svg';
import TextInput from '../../common/components/TextInput';
import logo from '../../assets/Images/AboutUS/logo_short.png';
import './Login.css';

const Login = (props) => {
	const [user,setUser] = useState({});
	const login = (e) =>  {
		if(e){
			e.preventDefault();
		}
		console.log(user);
	};
	return (
		<>
			<NavBar />
			<div className='background'>
				<div className='form'>
					<div className='left'>
						{/* <div className='logo-left'>
							<img src={logo} alt='logo'/>
    					    <h1>{APP_NAME_short}</h1>


						</div> */}
						<img src={LoginImage} alt=""/>

					</div>
					<form onSubmit={login}>
						<TextInput label="Email" type='email' value={user.email} />
						<TextInput label="Password" type='password' value={user.password} />
						<button type="submit" >Login</button>  
					</form>
				</div>
				
			</div>
		</>
	);
};

export default Login;

