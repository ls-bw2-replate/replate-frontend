import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';

// import HomeVolunteer from './components/volunteer/HomeVolunteer';
// import Login from './components/login/Login';
// import Nav from './components/navigation/Nav';
// import NavLoggedin from './components/navigation/NavLoggedin';

// import Signup from './components/signup/Signup';

import ViewDefault from './components/views/ViewDefault';
import './styles/App.scss';

let fakeFoodBanks = [
	{
		id: 612345,
		businessName: 'fakeFoodBank',
		businessAddr: '123 Fake St'
	}
];

let fakeDonations = [
	{
		id:55555,
		businessName: 'ANOTHER fakeDonation',
		businessAddr: '2342 LELE Lane',
		pickup:'',
		delivered:'',
	},
	{
		id:4343,
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

	newPickup = e => {
		let postDonations = [...this.state.donations];
		let myPostDonations = [...this.state.myDonations];
		let thisItem = {};
		let thisId = Number(e.target.id);

		postDonations.forEach((item,index) => {
			if (item.id === thisId) {
				item.pickup = this.state['first_name'];
				thisItem = {...item};
				postDonations.splice(index,1);
				myPostDonations = [...myPostDonations, thisItem];
				this.setState(prevState => ({
					...prevState,
					donations: [...postDonations],
					myDonations: [...myPostDonations],
				}));
			}
		});

		myPostDonations.forEach((item,index) => {
			if (item.id === thisId) {
				item.pickup = this.state['first_name'];
				thisItem = {...item};
				myPostDonations.splice(index,1,thisItem);
				this.setState(prevState => ({
					...prevState,
					myDonations: [...myPostDonations],
				}));
			}
		});
	};

	removePickup = e => {
		let myPostDonations = [...this.state.myDonations];
		let thisItem = {};
		let thisId = Number(e.target.id);

		myPostDonations.forEach((item,index) => {
			if (item.id === thisId) {
				if (item.pickup === 'remove') {
					item.pickup = '';
					thisItem = {...item};
					myPostDonations.splice(index,1);
					this.setState({
						donations: [...this.state.donations, thisItem],
						myDonations: [...myPostDonations],
					});
				}
				else {
					item.pickup = 'remove';
					thisItem = {...item};
					myPostDonations.splice(index,1, thisItem);
					this.setState({
						myDonations: [...myPostDonations],
					});
				}
			}
		});
	};

	render() {
		return (
			<div className="App">
				{!this.state.loggedin && ( 
					<ViewDefault 
						login={this.fakeLogin}
						donations={this.state.donations}
						firstName={this.state['first_name']}
						foodBankList={this.state.foodbanks}
						myDonations={this.state.myDonations}
						newPickup={this.newPickup}
						removePickup={this.removePickup}
					/>
				 )}
			</div>
		);

		


		// OLD VIEW
		// return (
		// 	<div className="App">
		// 		<header>
		// 			{this.state.loggedin ? (
		// 				<NavLoggedin logout={this.logout} />
		// 			) : (
		// 				<Nav login={this.fakeLogin} />
		// 			)}
		// 		</header>

		// 		<main>
		// 			<Route path="/login" component={Login} />

		// 			<Route
		// 				path="/loggedin"
		// 				render={props => (
		// 					<HomeVolunteer
		// 						donations={this.state.donations}
		// 						firstName={this.state['first_name']}
		// 						foodBankList={this.state.foodbanks}
		// 						myDonations={this.state.myDonations}
		// 						newPickup={this.newPickup}
		// 						removePickup={this.removePickup}
		// 					/>
		// 				)}
		// 			/>

		// 			{!this.state.loggedin && (
		// 				<img
		// 					id="big-logo"
		// 					src={require('./assets/img/replate_badge.png')}
		// 					alt="RePlate - Feed the Hungry. Reduce Waste."
		// 				/>
		// 			)}

		// 			<Route path="/signup" component={Signup} />
		// 		</main>
		// 	</div>
		// );



	}
}
export default App;
