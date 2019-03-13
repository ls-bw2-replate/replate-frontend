import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import HomeVolunteer from './components/volunteer/HomeVolunteer';
import Login from './components/login/Login';
import Nav from './components/navigation/Nav';
import NavLoggedin from './components/navigation/NavLoggedin';

import Signup from './components/signup/Signup';
import './styles/App.scss';

let fakeFoodBanks = [
	{
		id: 123,
		businessName: 'fakeFoodBank',
		businessAddr: '123 Fake St'
	}
];

let fakeDonations = [
	{
		id:232,
		businessName: 'fakeDonation',
		businessAddr: '2342 Lala Lane',
		pickup:'',
		delivered:'',
	}
];

let fakeMyDonations = [
	{
		id:333,
		businessName: 'Two Tacos',
		businessAddr: '301 Burrito Bunker',
		pickup:'SteveDaveID',
		delivered:'',
	}
];

class App extends Component {
	state = {
		donations: [...fakeDonations],
		foodbanks: [...fakeFoodBanks],
		first_name: 'SteveDave',
		loggedin: '',
		myDonations: [...fakeMyDonations],
	};

	componentDidMount() {
		// this.getDonations();
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
								foodBankList={this.state.foodbanks}
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
