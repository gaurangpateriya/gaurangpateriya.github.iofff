/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import CourseDetails from './components/CourseDetails/CourseDetails';
import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={AboutUs} exact />
				<Route path="/:courseDetails" component={CourseDetails}  exact/>
			</Switch>
    	</BrowserRouter>
	);
}
export default App;



