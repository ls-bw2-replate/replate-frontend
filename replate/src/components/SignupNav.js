import React from 'react';
import {Link} from 'react-router-dom';

import './SignupNav.scss'

const SignupNav = props => {
    return ( 
        <div className="SignupNav">
            <p>
            I am an<Link to="/signup/volunteer">Individual Volunteer.</Link>
            </p>

            <p>I am a<Link to="/signup/business">Business</Link> 
                that wants to donate.
            </p>

            <p>
                I am a<Link to="/signup/foodbank">Food Bank</Link> 
                that wants to receive donations.
            </p>
        </div>
     );
}
 
export default SignupNav;