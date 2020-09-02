/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.min.css';

import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import CourseDetails from './components/CourseDetails/CourseDetails';
import TalkToMentor from './components/TalkToMentor/TalkToMentor';
import PaymentPage from './components/PaymentPage/PaymentPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={AboutUs} 
				exact />
				<Route path="/login" component={Login} exact />
				<Route path="/register" component={Register} exact />
				<Route path="/vit" component={() => <AboutUs college={'vit'} />} exact />
				<Route path="/talk-to-mentor" component={TalkToMentor}  exact/>
				<Route path="/payments" component={PaymentPage}  exact/>
				<Route path="/:courseDetails" component={CourseDetails}  exact/>
				
				
			</Switch>
    	</BrowserRouter>
	);
}
export default App;



