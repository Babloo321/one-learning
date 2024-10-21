import React from 'react';
import { Link } from 'react-router-dom';
import './Academy.css';
function About() {
  return (
    <div className="academy-container">
      <div className="address-link">
        <ul>
          <li>
            <Link to="/" className="link">
              Lucknow
            </Link>
          </li>
          <li>
            <Link to="/academy" className="link">
              Erode
            </Link>
          </li>
          <li>
            <Link to="/withus" className="link">
              Ahmedabad
            </Link>
          </li>
          <li>
            <Link to="/community" className="link">
              Srinagar
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="link">
              Vizag
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="link">
              Kolkata
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="link">
              Patna
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="link">
              Tumkur
            </Link>
          </li>
        </ul>
      </div>

      <div className="one-image">
        <img
          src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="lady"
          className="img first-img"
        />
        <img
          src="https://images.pexels.com/photos/4421546/pexels-photo-4421546.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="lady"
          className="img second-img"
        />
      </div>

      <div className="text">
        <p className="text-heading">
          Embrace your Knowledge with Blended Learning
        </p>
        <hr />
        <p className="text-content">
          ONELearning | Academy is an interconnection of various Skill
          Development Centres across the globe to transform learning
        </p>
      </div>

      <div className="location">
        <img
          src="https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="location-img india"
        />
        <img
          src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="location-img world"
        />
      </div>

      <div className="exclusive-container">
        <p className="ex-text">An Exclusive Solution For...</p>
        <div className="exclusive">
          <div className="ex-collabrative">
            <p>Collabrative Learning</p>
            <ul>
              <li>Face to face interaction with local mentor</li>
              <li>
                Group activities & knowledge sharing to expand the thought
                process
              </li>
              <li>ONE plateform for Techonology & Clinical training</li>
            </ul>
          </div>
          <div className="ex-constructive">
            <p>Constructive Learning</p>
            <ul>
              <li>Knowledge sharing in local language via regional faculty</li>
              <li>
                Build presentation & public speaking skills for the next
                generation speaker
              </li>
              <li>Dual mentor concept with a blend of Theory and particle</li>
            </ul>
          </div>
          <div className="ex-computer">
            <p>Computer Assisted</p>
            <ul>
              <li>Recorded lectures to enables learn at your own place</li>
              <li>24*7 helpdesk to address your concerns</li>
              <li>
                Lifetime membership to our ONE Community for knowledge sharing
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="advantage">
        <div className="adv-text">
          <h1>ONELearning Centre Advantage</h1>
          <p>
            Why is this the best learning programme to improve your academic
            performance?
          </p>
        </div>
        <div className='adv-cont'>
          <div className='box'>
            <p className='box-heading'>Feature</p>
            <p className='box-text'>No one mentor</p>
            <hr />
            <p className='box-text'>Methodology</p>
            <hr />
            <p className='box-text'>Platform</p>
            <hr />
            <p className='box-text'>Problem Solving</p>
            <hr />
            <p className='box-text'>Evaluation</p>
            <hr />
          </div>

           <div className='box'>
            <p className='box-heading'>Regular Classes</p>
            <p className='box-text'>Single Mentor concept or Mix of too many speakers
</p>
            <hr />
            <p className='box-text'>Recorded Lectures/ Conferences</p>
            <hr />
            <p className='box-text'>Only Clinical</p>
            <hr />
            <p className='box-text'> Limited Support</p>
            <hr />
            <p className='box-text'> Case presentations only</p>
            <hr />
          </div>

          <div className='box'>
            <p className='box-heading'>ONELearning Academy</p>
            <p className='box-text'>Master & Regional Faculty concept – One for concept and one to assist with personalized attention</p>
            <hr />
            <p className='box-text'> Structured Live & Recorded Sessions with Tech enabled classrooms</p>
            <hr />
            <p className='box-text'>Clinical & Technology Sessions at ONE Place</p>
            <hr />
            <p className='box-text'>24*7 ONE Helpdesk to address all your queries</p>
            <hr />
            <p className='box-text'> Role Plays case discussions blended with interactive MCQ & Simulation based questionnaires</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="journey">
        <p className='journey-heading'>A Doctor's Learning Journey at ONELearning Academy</p>
        <img src='https://onelearninghealthcare.com/wp-content/uploads/2022/06/journetatacademy-1024x649.png' alt='logo' />
      </div>
    </div>
  );
}

export default About;
