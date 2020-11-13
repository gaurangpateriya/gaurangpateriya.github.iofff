/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
import React, { lazy, Component } from 'react';
import {

	Switch,
	Route,
} from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import CircularProgress from '@material-ui/core/CircularProgress';

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
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App({ history }) {

	return (
		<>

			<React.Suspense fallback={(
				<div style={{
					width: '40px', height: '40px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
				}}
				>
					<h4>Loading...</h4>
					<CircularProgress />
				</div>
			)}
			>

				<ConnectedRouter history={history}>
					<Switch>
						<Route path="/" component={AboutUs}
							exact />
						<Route path="/login" component={Login} exact />
						<Route path="/register" component={Register} exact />
						<Route path="/vit" component={() => <AboutUs college={'vit'} />} exact />
						<Route path="/mis" component={() => <AboutUs college={'mis'} />} exact />
						<Route path="/talk-to-mentor" component={TalkToMentor} exact />
						<Route path="/payments" component={PaymentPage} exact />
						<Route path="/privacy-policy" component={PrivacyPolicy} exact />
						<Route path="/:courseDetails" component={CourseDetails} exact />

					</Switch>
				</ConnectedRouter>
			</React.Suspense>
		</>
	);
}
export default App;



