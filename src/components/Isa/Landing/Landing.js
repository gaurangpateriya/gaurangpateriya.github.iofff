import React from 'react';
// import { Link } from 'react-router-dom';
import manIcon from '../../../assets/Images/ISA/icon1.png';
import cover from '../../../assets/Images/ISA/cover.jpg';
import jobSecurity from '../../../assets/Images/ISA/jobSecurity.jpg';
import payment from '../../../assets/Images/ISA/payment.png';
import nomoney from '../../../assets/Images/ISA/nomoney.jpg';
import job from '../../../assets/Images/ISA/job.jpg';

import './Landing.css';
import Slider from './Slider';

const Landing = () => {
  return (
    <>
      <div className='head'>
        <h1 className='white'>YAV Technology's</h1>
        <p className='fs-50 white'>Income sharing agreement (ISA)</p>
      </div>

      {/* ------ */}

      <div className='row '>
        <div className='col-2'>
          <img src={cover} alt='image' />
        </div>
        <div className='col-2'>
          <h1>What is ISA?</h1>
          <p>
            With the YAV Technology Income Share Agreement (ISA), a student can enroll and complete the course by paying absolutely nothing upfront and get placed in top-notch companies. All he needs to do is agree to pay only 17% for the first 6 months of the in-hand salary after starting the job offer. This way students can learn effectively without the pressure of down payments or any joining fees in the starting.
          </p>
        </div>
      </div>

      {/* ------ */}

      <div className='row p-3 bg-light'>
        <div className='align'>
          <h1>4 THINGS TO KNOW ABOUT THE YAV's ISA</h1>
        </div>
        {/* <div className='col-3 '> */}
        {/* <div className='bg-light p-1'>
            <img src={job} alt='image' />
            <h4>Rs. 0 till you get a job</h4>
            <p className='p-1'>
              With YAV Technology, you do not pay a single penny till you get a job! No registration fees, deposits or monthly fees or any other hidden charges.
            </p>
          </div> */}
        {/* </div> */}
        <div className='col-3'>
          <div className='bg-light p-1'>
            <img src={payment} alt='image' />
            <h4>Pay amount based on what you get</h4>
            <p className='p-1'>
              The amount we charge is a percentage of what you earn. Why? This keeps it fair for students with all kinds of job offers without burdening anyone. Yes, we care.
            </p>
          </div>
        </div>
        <div className='col-3'>
          <div className='bg-light p-1'>
            <img src={jobSecurity} alt='image' />
            <h4>Job Loss Security</h4>
            <p className='p-1'>
              Job markets are uncertain, we know. In case you lose your job, your ISA payments stop. You can then onboard our program again and we will only be charging you again after you get another job. Don't worry, your prior payments, if any, will be adjusted.
            </p>
          </div>
        </div>
        <div className='col-3'>
          <div className='bg-light p-1'>
            <img src={nomoney} alt='image' />
            <h4>Stop Paying if you reach the cap</h4>
            <p className='p-1'>
              Got an awesome package? Well we don't have a minimum ISA payout but do have a maximum! If you hit 1 Lakh, you don't need to pay anything further.
            </p>
          </div>
        </div>
      </div>

      {/* ------ */}

      <div className='p-3'>
        <div className='row pb5'>
          <div className='align'>
            <h1>Let's look at the numbers</h1>
          </div>
          <div className='col-4 '>
            <div className='align'>
              <h1 className='orange'>₹18 LPA</h1>
              <p>CTC</p>
            </div>
          </div>
          <div className='col-4 '>
            <div className=' align'>
              <h1 className='orange'>₹12 LPA</h1>
              <p>Fixed</p>
            </div>
          </div>
          <div className='col-4 '>
            <div className=' align'>
              <h1 className='orange'>₹2 LPA</h1>
              <p>
                Performance Bonus
              </p>
              <p>(We don't charge you for this. Your performance bonus is 100% your own)</p>
            </div>
          </div>
          <div className='col-4 '>
            <div className='align'>
              <h1 className='orange'>₹4 LPA</h1>
              <p>Stock Options</p>
              <p>(We don't charge you for stock options either. Promise!)</p>
            </div>
          </div>
        </div>

        <Slider />



        {/*--------*/}

        {/* <div className='bg-light align p-3'>
          <p className='p-2 fs-30'>Start learning with YAV today!</p>
          <Link to='/talk-to-mentor' className='btn p-1'>Apply now for free</Link>

        </div> */}
      </div>
    </>
  );
};
export default Landing;
