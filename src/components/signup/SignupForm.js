import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import '../../styles/SignupForm.scss';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: 'address',
			businessAddr: '',
			businessName: '',
			email: '',
			first_name: '',
			last_name: '',
			password: '',
			phone: '',
			usertype: '',
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		let newUser = {};
		const { usertype } = this.props.match.params;

		if (usertype === 'volunteer') {
			newUser = {
				address: 'address',
				email: this.state.email,
				first_name: this.state['first_name'],
				last_name: this.state['last_name'],
				password: this.state.password,
				phone: this.state.phone,
				usertype: usertype,
			};
		} else newUser = { ...this.state, usertype: usertype };

		console.log(newUser);

		axios
			.post('http://localhost:5000/api/auth/register', newUser)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				this.props.history.push('/loggedin');
			})
			.catch(err => console.log(err));
	};

	render() {
		const { usertype } = this.props.match.params;
		return (
			<ul className="SignupForm">
				<form onSubmit={this.handleSubmit}>
					{usertype === 'business' && (
						<>
							<h5>
								Please tell us about your <strong>Business</strong>,
							</h5>
							<BusinessForm
								businessName={this.state.businessName}
								businessAddr={this.state.businessAddr}
								handleChange={this.handleChange}
							/>
						</>
					)}

					{usertype === 'foodbank' && (
						<>
							<h5>
								Please tell us about your <strong>Food Bank</strong>,
							</h5>
							<BusinessForm
								businessName={this.state.businessName}
								businessAddr={this.state.businessAddr}
								handleChange={this.handleChange}
							/>
						</>
					)}

					{usertype === 'volunteer' && (
						<>
							<h5>Individual Volunteer,</h5>
							<h6>
								please tell us about <strong>yourself!</strong>
							</h6>
						</>
					)}

					<li>
						<p>What is your first name?</p>
						<input
							name="first_name"
							onChange={this.handleChange}
							placeholder="first name"
							type="text"
							value={this.state['first_name']}
							required
						/>
					</li>

					<li>
						<p>What is your last name?</p>
						<input
							name="last_name"
							onChange={this.handleChange}
							placeholder="last name"
							type="text"
							value={this.state['last_name']}
							required
						/>
					</li>

					<li>
						<p>What is your mobile phone number?</p>
						<input
							name="phone"
							onChange={this.handleChange}
							placeholder="phone"
							type="text"
							value={this.state.phone}
							required
						/>
					</li>

					<li>
						<p>What is your email address?</p>
						<input
							name="email"
							onChange={this.handleChange}
							placeholder="email"
							type="text"
							value={this.state.email}
							required
						/>
					</li>

					<li>
						<p>Create a new password</p>
						<input
							name="password"
							onChange={this.handleChange}
							placeholder="password"
							type="text"
							value={this.state.password}
							required
						/>
					</li>

					<input type="submit" value="Sign Up" />
				</form>
			</ul>
		);
	}
}
export default withRouter(SignupForm);

const BusinessForm = props => {
	return (
		<>
			<li>
				<p>What is the name of your business?</p>
				<input
					name="businessName"
					onChange={props.handleChange}
					placeholder="business name"
					type="text"
					value={props.businessName}
					required
				/>
			</li>

			<li>
				<p>What is the address of your business?</p>
				<input
					name="businessAddr"
					onChange={props.handleChange}
					placeholder="business address"
					type="text"
					value={props.businessAddr}
					required
				/>
			</li>
			<h6>
				and some details about <strong>yourself</strong>,
			</h6>
		</>
	);
};
