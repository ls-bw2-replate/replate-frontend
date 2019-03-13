import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Login.scss';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
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
		const newLogin = { ...this.state };
		console.log('newLogin', newLogin);
	};

	handleLogin = e => {
		e.preventDefault();

		let newLogin = {
			// email:'rj@rj.com',
			password: '123456',
			first_name: 'lil ricky',
			usertype: 'volunteer',
		};

		axios
			.post('http://localhost:5000/api/auth/register', newLogin)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				this.props.history.push('/loggedin');
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleLogin}>
					<h5>Login</h5>
					<input
						name="email"
						onChange={this.handleChange}
						placeholder="email"
						type="text"
						value={this.state.email}
						required
					/>

					<input
						name="password"
						onChange={this.handleChange}
						placeholder="password"
						type="text"
						value={this.state.password}
						required
					/>

					<input type="submit" value="Go" />
				</form>
			</div>
		);
	}
}
