import React from 'react';

import './SignupVolunteer.scss';

const SignupVolunteer = props => {
    return (
        <ul className="SignupVolunteer">
            <h5>Individual Volunteer,</h5>
            <h6>please tell us about <strong>yourself!</strong></h6>

            <li>
                <p>What is your name?</p>
                <input name="name"
                    onChange={props.handleChange}
                    placeholder="name"
                    type="text"
                    value={props.name}
                    required />
            </li>

            <li><p>What is your email address?</p>
                <input name="email"
                    onChange={props.handleChange}
                    placeholder="email"
                    type="text"
                    value={props.email}
                    required />
            </li>

            <li><p>Create a new password</p>
                <input name="password"
                    onChange={props.handleChange}
                    placeholder="password"
                    type="text"
                    value={props.password}
                    required />
            </li>

            <input type="submit" value="Sign Up" />

        </ul>
     );
}
export default SignupVolunteer;