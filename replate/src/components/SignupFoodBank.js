import React from 'react';

import './SignupFoodBank.scss';

const SignupFoodBank = props => {
    return (
        <ul className="SignupFoodBank">
            <h5>Please tell us about your <strong>Food Bank</strong>,</h5>
            
            <li>
                <p>What is the name of your business?</p>
                <input name="businessName"
                    onChange={props.handleChange}
                    placeholder="business name"
                    type="text"
                    value={props.businessName}
                    required />
            </li>

            <li>
                <p>What is the address of your business?</p>
                <input name="businessAddr"
                    onChange={props.handleChange}
                    placeholder="business address"
                    type="text"
                    value={props.businessAddr}
                    required />
            </li>

            <h6>and some details about <strong>yourself</strong>,</h6>

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
export default SignupFoodBank;