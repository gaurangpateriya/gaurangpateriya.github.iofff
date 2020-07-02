import React from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
	return (
		<>
			<NavBar />
			<AboutUs />

		</>

	);

}



export default App;

