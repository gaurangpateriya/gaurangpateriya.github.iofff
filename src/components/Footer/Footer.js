import React from 'react';
import 'tachyons';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DocumentIcon from '@material-ui/icons/Dock';
import './Footer.css';
import PolicyIcon from '@material-ui/icons/Policy';
import { Link } from 'react-router-dom';

const Footer = () => {
  // console.log(our_team);

  return (
    <>
      <div className='reach-us-div'>
        <div className='content'>
          <EmailIcon />
          <p>Email</p>
          <p>yavtechnology@gmail.com</p>
        </div>

        <div className='content'>
          <PhoneIcon />
          <p>Call Us</p>
          <p>+91 70034 42036</p>
        </div>
        <div className='content'>
          <LocationOnIcon />
          <p>Reach Us</p>
          <p>
            YAV Technology, No 38/1 Laxmipura, Vaderahalli -Sakalvara Road,
            Anekal Taluk, Bangalore- 560083
          </p>
        </div>
        <div className='content'>
          <DocumentIcon />
          <Link to='isa'>ISA</Link>
        </div>
        <div className='content'>
          <PolicyIcon />
          <Link to='privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
