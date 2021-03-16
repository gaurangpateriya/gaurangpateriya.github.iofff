import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import mail from '../../assets/Images/HireWithUs/mail.png';
import search from '../../assets/Images/HireWithUs/search.png';
import quality from '../../assets/Images/HireWithUs/quality.png';
import ready from '../../assets/Images/HireWithUs/ready.png';
import zerofee from '../../assets/Images/HireWithUs/zerofee.jpg';
import students from '../../assets/Images/HireWithUs/students.jpg';
import dev from '../../assets/Images/HireWithUs/developers.png';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './HireWithUs.css';
import agent from '../../agent';
import CircularProgress from '@material-ui/core/CircularProgress';

function importAll(r) {
  return r.keys().map(r);
}
const companies = importAll(
  // require.context(
  //   '../../assets/Images/AboutUS/mentors_company/',
  //   false,
  //   /\.(png|jpe?g|svg)$/
  // ),
  require.context(
    '../../assets/Images/HireWithUs/referral_partners/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

let today = new Date();
const currentTime = today.getHours() + 2;

let times = [
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
];
if (currentTime < 19) {
  times = times.filter((t) => {
    let x = Number(t.split(':')[0]);

    return x >= currentTime;
  });
} else {
  today = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
}
const minDate = today.toJSON().split('T')[0];

const HireWithUs = () => {
  const [user, setUser] = useState({ dateForCall: minDate });
  const [time, setTime] = useState(times[0]);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState('');
  const [error, setError] = useState('');

  const submitDetails = (e) => {
    if (e) {
      e.preventDefault();
    }
    setError(null);
    setRes('');

    const data = { ...user, timeForCall: time, scheduledBy: 'Hiring Manager' };
    if (data.phoneNo.length !== 10) {
      setError('Enter 10 digit mobile number without leading zero.');
      setRes('');
      return;
    }
    // console.log(data);
    setLoading(true);
    agent.TalkToMentor.sendDetails(data)
      .then((res) => {
        setLoading(false);
        let x = Number(time.split(':')[0]) + 1;
        setRes(
          `You will recieve a call from our executive on ${user.dateForCall} between ${time} and ${x}:00`
        );
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, err.response);
        if (err.response && err.response.data && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError('Some error occured, please try again after some time!!!');
        }
        setRes('');
      });
  };

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <NavBar />
      <div className='heading-hirewithus'>
        <div className='head-div'>
          <p className='white'>Hire best in class engineers at no cost!</p>
          <p className='p-div white'>
            YAV Technology's students are ready to join your company and help
            you achieve high impact goals
          </p>
          <div className='btn-div'>
            <button onClick={handleScroll} className='btn'>
              Start Hiring
            </button>
          </div>
        </div>
        <div>
          <img src={search} />
        </div>
      </div>

      {/* ------ */}

      <div className='row-div pd1'>
        <div className='align'>
          <p>What makes us unique?</p>
        </div>
        <div className='col3'>
          <img className='img' src={quality} alt='image' />
          <p className=''>High quality candidates</p>
        </div>
        <div className='col3'>
          <img className='img-1' src={ready} alt='image' />
          <p className=''>Ready to join</p>
        </div>
        <div className='col3'>
          <img src={zerofee} alt='image' />
          <p className=''>Zero hiring charges</p>
        </div>
      </div>

      <div className='student-details-div'>
        <div className='content'>
          <h1>What kind of students do we have?</h1>
          <div className=' text-content'>
            <div>
              <h2>100+ Hours</h2>
              <p> Of Programming Experience</p>
            </div>
            <div>
              <h2>Highly Trained</h2>
              <p>By Industry Professionals</p>
            </div>
            <div>
              <h2>Great projects</h2>
              <p>With Rich Github Repos</p>
            </div>


            <div>
              <h2>100+ Hours</h2>
              <p>Of Competitive Coding</p>
            </div>
            <div>
              <h2>Exams Perfected</h2>
              <p>To ensure genuineness</p>
            </div>
            <div>
              <h2>125+</h2>
              <p>Leetcode solutions</p>
            </div>

          </div>
        </div>

        <img src={students} />
      </div>

      {/* ------ */}
      <div className='row-div1 bg-orange'>
        <div className='align'>
          <p className='p-div'>
            YAV Technology can fullfil multiple profile requirements
          </p>
        </div>
        <div className='col2'>
          <p className='yellow-back  floating'>Full Stack Engineer</p>
          <p className='green-back  floating'>Backend Engineer</p>
        </div>
        <div className='col2'>
          <img src={dev} alt='image' />
        </div>
        <div className='col2'>
          <p className='pink-back  floating'>Frontend Engineer</p>
          <p className='blue-back  floating'>Software Engineer</p>
        </div>
      </div>

      {/* ------ */}
      <div className='companies-div'>
        <p>Our hiring and referral partners</p>
        <div className='company-img-wrapper'>
          {companies.map((t, i) => (
            <img src={t} key={i} alt='' className='company-img' />
          ))}
        </div>
      </div>
      {/*--------*/}

      <div className='hiring-manager-form'>
        <p>Fill in the form and we will get back to you!</p>
        <div className='grid'>
          <div>
            <img src={mail} alt='image' />
          </div>
          <div className='schedule-a-call-form '>
            <form onSubmit={submitDetails}>
              <div className='res-wrapper'>
                {res && <p className='response'>{res}</p>}
                {error && <p className='error'>{error}</p>}
              </div>
              <div className='flex  flex-column'>
                <input
                  required
                  placeholder='Name'
                  type='text'
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className='flex  flex-column'>
                <input
                  required
                  placeholder='Business Email'
                  type='email'
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className='flex  flex-column'>
                <input
                  required
                  placeholder='Contact Number'
                  type='number'
                  value={user.phoneNo}
                  onChange={(e) =>
                    setUser({ ...user, phoneNo: e.target.value })
                  }
                />
              </div>

              {/* <div className='flex  flex-column'> */}
              <div className='inputs'>
                <label htmlFor='date'> Select Slot: </label>
                <input
                  required
                  type='date'
                  min={minDate}
                  value={user.dateForCall}
                  onChange={(e) =>
                    setUser({ ...user, dateForCall: e.target.value })
                  }
                />
                <select onChange={(e) => setTime(e.target.value)}>
                  {times.map((t, i) => (
                    <option value={t} key={i}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              {/* </div> */}
              <button type='submit' disabled={loading}>
                {loading ? (
                  <CircularProgress style={{ color: 'white' }} size={20} />
                ) : (
                    'Get A Call'
                  )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HireWithUs;
