import React from 'react';
import { Route } from 'react-router-dom';

import '../../styles/Signup.scss';

import SignupForm from './SignupForm';
import SignupNav from '../navigation/SignupNav';

const Signup = props => {
	return (
		<div className="Signup">
			<h5>Sign Up!</h5>

			<Route
				exact
				path="/signup"
				render={ownProps => <SignupNav {...ownProps} />}
			/>

			<Route
				path="/signup/:usertype"
				render={ownProps => <SignupForm {...ownProps} />}
			/>
		</div>
	);
};
export default Signup;
