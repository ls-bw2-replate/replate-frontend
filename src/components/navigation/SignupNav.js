import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/SignupNav.scss';

const SignupNav = props => {
	return (
		<div className="SignupNav">
			<h4>
				I am an<Link to="/signup/volunteer">Individual Volunteer.</Link>
			</h4>
			<h4>
				I am a<Link to="/signup/business">Business</Link>that wants to donate.
			</h4>
			<h4>
				I am a<Link to="/signup/foodbank">Food Bank</Link>that wants to receive
				donations.
			</h4>
		</div>
	);
};

export default SignupNav;
