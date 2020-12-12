import React, { Fragment } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Landing from './Landing/Landing';
import Questions from './Questions/Questions';

const Isa = () => {
  return (
    <Fragment>
      <NavBar />
      <Landing />
      <Questions />
      <Footer />
    </Fragment>
  );
};

export default Isa;
