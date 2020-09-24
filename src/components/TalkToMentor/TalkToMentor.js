import React, {  useState } from 'react';
import 'tachyons';
import CircularProgress from '@material-ui/core/CircularProgress';

import './TalkToMentor.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import agent from '../../agent';

let  today = new Date();
const currentTime = today.getHours() + 2;


let times = ['11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
if( currentTime < 19 ){
	times = times.filter(t => {
		let x = Number(t.split(':')[0]);
		
        
		return x >= currentTime ;
	});
} else{
	today = new Date( Date.now() + 1 * 24 * 60 * 60 * 1000);
}
const minDate = today.toJSON().split('T')[0];

const TalkToMentor = () => {
	
	const [user, setUser] = useState({date:minDate});
	const [time, setTime] = useState(times[0]);
	const [loading, setLoading] = useState(false);
	const [res, setRes] = useState("");
	const [error, setError] = useState("");
	const submitDetails =  e => {
		if(e){
			e.preventDefault();
		}
		
		let { phone } = user;
		phone = parseInt(phone);
		
		setUser({ ...user, phone });

		const data = { ...user, time, phone: String(phone) };
		
		if( data.phone.length !== 10){
			setError("Enter 10 digit mobile number without leading zero.");
			setRes("")
			return;
		}
		// console.log(data);
		setLoading(true);
		agent.TalkToMentor.sendDetails(data).then(res => {
			console.log(res);
			setLoading(false);
			let x = Number(time.split(':')[0]) + 1;
			setRes(`You will recieve a call from our executive on ${user.date} between ${time} and ${x}:00`);
			setError("");
		}).catch(err  => {
			setLoading(false);
			console.log(err,err.response);
			if( err.response && err.response.data && err.response.data.error ){
				setError(err.response.data.error);
			} else{
				setError("Some error occured, please try again after some time!!!");
			}
			
			setRes("");
		});
	};
	
	return (
		<>							
			<NavBar/>
			<div className='book-a-call-wrapper'>
				<div className='book-a-call-div'>
					
					<form onSubmit={submitDetails}>
                        
						<div className='header'>
							<div className='heading-div'>
								<p className='txt'>Book a call</p>
								<p className='watermark'>Call</p>
							</div>
							<small>Book a call slot and our representative will call you within 1hr of selected time.</small>
						</div>
						<div className='res-wrapper'>
							{
								res && <p className='response'>
									{res}
								</p>
							}
							{
								error && <p className='error'>
									{error}
								</p>
							}

						</div>
						<div className='flex  flex-column'>
							<label htmlFor='name' >Name: </label>
							<input required type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value}) } />
						</div>
						<div className='flex  flex-column'>
							<label htmlFor='email' >Email: </label>
							<input required type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value}) } />
						</div>
						<div className='flex  flex-column'>
							<label htmlFor='phone'>Phone: </label>
							<input required type="number" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value}) } />
						</div>
						<div className='flex  flex-column'>
							<label htmlFor="date"> Time for Call: </label>
							<div className='inputs'>
								<input required type="date"  min={minDate} value={user.date} onChange={(e) => setUser({...user, date: e.target.value}) } />
								<select onChange={(e) => setTime(e.target.value) }>
									{
										times.map((t,i) => (
											<option value={t} key={i} >{t}</option>
										))
									}
								</select>
							</div>
						
						</div>
						<button type="submit" disabled={loading}>
							{
								loading ? 
									<CircularProgress style={{color:'white'}} size={20} />
									:'Get A Call'
							}
						</button>
					</form>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default TalkToMentor;
