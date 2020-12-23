/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'tachyons';


import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MoneyIcon from '@material-ui/icons/Money';
import ScrollAnimation from 'react-animate-on-scroll';
import './AboutUs.css';

const PaymentStructure = ({ college }) => {

    const [costStructure, setCostStructure] = useState('graduate');
    return (
        <>
            <div className=''>
                {
                    college !== 'mis' && (
                        <ScrollAnimation animateOnce animateIn='bounceInLeft' className='what-will-it-cost-div'>
                            <h2>SO WHAT WILL IT COST?</h2>
                            <h4>Welcome to the world's most affordable Live Mentorship program</h4>
                            {/* <h4>I am a...</h4> */}
                            <div className='btns-div'>
                                <button type='button' onClick={() => setCostStructure("graduate")} className={costStructure === 'graduate' ? 'active' : ""} >Graduate</button>
                                {/* <button type='button' onClick={() => setCostStructure("student")} className={costStructure === 'student' ? 'active' : ""}>Student</button> */}
                            </div>
                            {
                                costStructure === 'student' ? (
                                    <ul>

                                        <li>
                                            <CreditCardIcon />
                                            <b>No deposit charges/registration fees</b>

                                        </li>
                                        <li>
                                            <CardGiftcardIcon />
                                            <b>No long term bonds and agreements</b>

                                        </li>
                                        <li>
                                            <LocalAtmIcon />
                                            <b>Pay only as long as you feel we are adding value</b>
                                        </li>
                                        <li>
                                            <CheckCircleRoundedIcon />
                                            <b> 7-day free trial</b>

                                        </li>
                                        <li>
                                            <MoneyIcon />
                                            <b>Only Rs. 1000 per month</b>

                                        </li>

                                        <li>
                                            <WorkIcon />
                                            <b>In-House internship on industry-level products and projects</b>

                                        </li>
                                        <li>
                                            <SupervisorAccountIcon />
                                            <b>Get a chance to mentor your juniors in the community</b>

                                        </li>
                                    </ul>
                                ) : (
                                        <ul>


                                            <li>
                                                <LocalAtmIcon />
                                                <b>Pay only if you get a job</b>
                                                <p> Because we win when you do!</p>
                                            </li>
                                            <li>
                                                <CreditCardIcon />
                                                <b>No deposit charges/registration fees</b>
                                                <p>Because it is an educational community, not a gym membership.</p>
                                            </li>
                                            <li>
                                                <MoneyIcon />
                                                <b> Just 17% of your monthly salary for only the first 6 months</b>
                                                <p> Because we want to celebrate your achievement too!</p>
                                            </li>
                                            <li>
                                                <CheckCircleRoundedIcon />
                                                <b> 7 days free trial</b>
                                                <p> Because trust is not maggi. It takes time.</p>
                                            </li>
                                            <li>
                                                <CardGiftcardIcon />
                                                <b>Referrals to top companies at no extra charges</b>
                                                <p>Because the best things should happen to the best people</p>
                                            </li>
                                        </ul>
                                    )
                            }



                        </ScrollAnimation>
                    )
                }


            </div>
        </>
    );
};

export default PaymentStructure;
