import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Login.scss';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error:'',
			email: '',
			password: '',
			waiting:false,
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleLogin = e => {
		e.preventDefault();
		this.setState({error:''});
		let newLogin = {
			email: this.state.email,
			password: this.state.password,
		};
		this.setState({waiting:true});
		axios.post('https://replate-backend.herokuapp.com/api/auth/login', newLogin)
			.then(res => {
				console.log(res.data);
				localStorage.setItem('token', res.data.token);
				this.props.login(res.data.usertype);
			})
			.catch(err => {
				console.log(err);
				this.setState({
					error:err.message,
					waiting:false,
				});
			});
	}

	render() {
		return (
			<div className="Login">
				{/* LOADING SCREEN */}
				{this.state.waiting && ( <h4>loading...</h4> )}

				{/* ERROR DISPLAY */}
				{this.state.error && ( <h4 className="error-msg">{this.state.error}</h4> )}

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
