import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import HomeVolunteer from './components/volunteer/HomeVolunteer';
import Login from './components/login/Login';
import Nav from './components/navigation/Nav';
import NavLoggedin from './components/navigation/NavLoggedin';

import Signup from './components/signup/Signup';
import './styles/App.scss';

class App extends Component {
	state = {
		donations: [],
		foodbanks: [],
		first_name: 'SteveDave',
		loggedin: '',
		myDonations: [],
	};

	componentDidMount() {
		this.getDonations();
		// let fakeDonations = [
		// 	{
		// 		id: 0,
		// 		businessName: 'Dinosaur BBQ',
		// 		businessAddr: '333 Elm St',
		// 		picked: false,
		// 	},
		// 	{
		// 		id: 1,
		// 		businessName: 'Morgan & Morgan',
		// 		businessAddr: '987 Court St',
		// 		picked: false,
		// 	},
		// 	{
		// 		id: 2,
		// 		businessName: 'Trader Joes',
		// 		businessAddr: '61120 Jefferson Ave',
		// 		picked: false,
		// 	},
		// ];
		// let fakeDonationsToo = [
		// 	{
		// 		id: 3,
		// 		businessName: 'the Little Pickle',
		// 		businessAddr: '3121 Kaiser Blvd',
		// 		picked: false,
		// 	},
		// 	{
		// 		id: 4,
		// 		businessName: 'Wegmans',
		// 		businessAddr: '1000 James Way',
		// 		picked: false,
		// 	},
		// 	{
		// 		id: 5,
		// 		businessName: 'Lil Rickys',
		// 		businessAddr: '6120 Jefferson Ave',
		// 		picked: false,
		// 	},
		// ];
		// this.setState({
		// 	donations: [...fakeDonations],
		// 	myDonations: [...fakeDonationsToo],
		// });
	}
	getDonations = () => {
		axios
			.get('http://localhost:5000/api/food')
			.then(res => this.setState({ donations: res.data }))
			.catch(err => console.log(err));
	};

	fakeLogin = e => {
		this.setState({
			loggedin: 'volunteer',
		});
	};

	logout = e => {
		this.setState({
			loggedin: '',
		});
	};

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<header>
					{this.state.loggedin ? (
						<NavLoggedin logout={this.logout} />
					) : (
						<Nav login={this.fakeLogin} />
					)}
				</header>

				<main>
					<Route path="/login" component={Login} />

					<Route
						path="/loggedin"
						render={props => (
							<HomeVolunteer
								donations={this.state.donations}
								firstName={this.state['first_name']}
								myDonations={this.state.myDonations}
							/>
						)}
					/>

					{!this.state.loggedin && (
						<img
							id="big-logo"
							src={require('./assets/img/replate_badge.png')}
							alt="RePlate - Feed the Hungry. Reduce Waste."
						/>
					)}

					<Route path="/signup" component={Signup} />
				</main>
			</div>
		);
	}
}
export default App;
