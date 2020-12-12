import React, { Fragment } from 'react';
import manIcon from '../../../assets/Images/ISA/icon1.png';
import './Landing.css';

const Landing = () => {
  return (
    <Fragment>
      <div className='head'>
        <h1 className='white'>YAV Technology's</h1>
        <p className='fs-50 white'>Income sharing agreement (ISA)</p>
      </div>

      {/* ------ */}

      <div className='row bg-light'>
        <div className='col-2'>
          <img src={manIcon} alt='image' />
        </div>
        <div className='col-2'>
          <h1>What is ISA?</h1>
          <p>
            With YAV Technology's income share agreement (or ISA) a student can
            enroll and complete the course by paying absolutely nothing and get
            placed in a top notch company, but agrees to pay back 2.5 Lakhs over
            a period of 24 months. This way students can learn effectively
            without pressure of down payment in the starting.*
          </p>
        </div>
      </div>

      {/* ------ */}

      <div className='row p-3'>
        <div className='align'>
          <h1>3 things to know about ISA</h1>
        </div>
        <div className='col-3 '>
          <div className='bg-light p-1'>
            <img src={manIcon} alt='image' />
            <h4>Pay ₹0 tuition until you land a high paying job</h4>
            <p className='p-1'>
              With YAV Technology's income share agreement (or ISA) a student
              can enroll and complete the course by paying absolutel
            </p>
          </div>
        </div>
        <div className='col-3 '>
          <div className='bg-light p-1'>
            <img src={manIcon} alt='image' />
            <h4>Pay a fixed amount over 24 months</h4>
            <p className='p-1'>
              After you land a job of and above the minimum guarantee you only
              have to pay a fixed amount of INR 2.5 Lakhs over a period of 24
              months.
            </p>
          </div>
        </div>
        <div className='col-3 '>
          <div className='bg-light p-1'>
            <img src={manIcon} alt='image' />
            <h4>Stop paying once you've reached the cap</h4>
            <p className='p-1'>
              You're 100% free from any obligation to us once you've reached the
              cap or the payment schedule ends.
            </p>
          </div>
        </div>
      </div>

      {/* ------ */}

      <div className='p-3'>
        <div className='row'>
          <div className='align'>
            <h1>Let's look at the numbers</h1>
          </div>
          <div className='col-3 '>
            <div className='align'>
              <h1 className='blue'>₹5 LPA</h1>
              <p>
                The ISA only kicks in once you're making at least ₹5 Lakhs per
                annum within 1 year of completion.
              </p>
            </div>
          </div>
          <div className='col-3 '>
            <div className=' align'>
              <h1 className='blue'>2 years</h1>
              <p>You'll make payments distributed over a span of 2 years.</p>
            </div>
          </div>
          <div className='col-3 '>
            <div className=' align'>
              <h1 className='blue'>₹2.5 Lakhs</h1>
              <p>
                You'll only have to pay a capped amount of 2.5 Lakhs over a
                period of 24 months once you get a placement of more than the
                minimum guarantee.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-3 '>
            <div className=''>
              <h1 className='blue'>₹0</h1>
              <p>
                The payment will get paused if you left/got fired from your
                first job within 3 months of joining. It continues when you get
                a new job. If in case you complete 3 months in your first job
                with min guaranteed CTC, you have to pay the entire amount
                irrespective of your employment status after that.
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className=''>
              <h1 className='blue'>1 year</h1>
              <p>
                Your ISA expires in 1 year if you don't land up in a job of more
                than 5 LPA within 1 year of course completion date. In this case
                you don't pay us anything
              </p>
            </div>
          </div>
          <div className='col-3 '>
            <div className=''>
              <h1 className='blue'>₹2 Lakh</h1>
              <p>
                You can choose to pay ₹2 Lakh upfront for YAV Technology instead
                of doing an ISA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*--------*/}

      <div className='bg-light align'>
        <p className='p-2 fs-30'>Start learning with YAV today!</p>
        <button className='btn p-1'>Apply now for free</button>
        <p className='p-2'>
          For more information and queries,<a href=''> Visit our FAQ Page</a>
        </p>
      </div>
    </Fragment>
  );
};
export default Landing;
