import React, {  useState } from 'react';
import 'tachyons';

import './TalkToMentor.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

let  today = new Date();
const currentTime = today.getHours() + 2;


let times = ['12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00'];
if( currentTime < 19 ){
	times = times.filter(t => {
		let x = Number(t.split(':')[0]);
		if(x > 12 ){
			x +=12;
		}
		return x >= currentTime;
	});
} else{
	today = new Date( Date.now() + 1 * 24 * 60 * 60 * 1000);
}
const minDate = today.toJSON().split('T')[0]

const TalkToMentor = () => {
	
	const [user, setUser] = useState({date:minDate});
	const [time, setTime] = useState(times[0]);
    
	const submitDetails = e => {
		if(e){
			e.preventDefault();
        }
        const data = { ...user, time }
		console.log(data);
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
						<button type="submit">Get A Call</button>
					</form>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default TalkToMentor;
