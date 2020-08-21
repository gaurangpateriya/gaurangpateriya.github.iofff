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

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={AboutUs} exact />
				<Route path="/talk-to-mentor" component={TalkToMentor}  exact/>
				<Route path="/payments" component={PaymentPage}  exact/>
				<Route path="/:courseDetails" component={CourseDetails}  exact/>
				
				
			</Switch>
    	</BrowserRouter>
	);
}
export default App;



