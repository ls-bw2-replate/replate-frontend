import React, {Component} from 'react';
import axios from 'axios';

import ViewBusiness from './components/views/ViewBusiness';
import ViewDefault from './components/views/ViewDefault';
import ViewVolunteer from './components/views/ViewVolunteer';
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
		businessName: 'Publix',
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

	// FAKE LOGIN HARD CODED for BUSINESS VIEW
	fakeLogin = e => {
		this.setState({
			loggedin: 'business',
		});
		window.history.pushState(null,null,'/business');
	};

	logout = e => {
		this.setState({
			loggedin: '',
		});
		window.history.pushState(null,null,'/');
	};

	newPickup = e => {
		let postDonations = [...this.state.donations];
		let myPostDonations = [...this.state.myDonations];
		let thisId = Number(e.target.id);

		postDonations.forEach((item,index) => {
			if (item.id === thisId) {
				item.pickup = this.state['first_name'];
				let thisItem = {...item};
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
				this.setState(prevState => ({
					...prevState,
					myDonations: [...myPostDonations],
				}));
			}
		});
	};

	removePickup = e => {
		let thisId = Number(e.target.id);
		let myPostDonations = [...this.state.myDonations];
 		myPostDonations.forEach((item,index) => {
			if (item.id === thisId) {
				if (item.pickup === 'remove') {
					item.pickup = '';
					let thisItem = {...item};
					myPostDonations.splice(index,1);
					this.setState({
						donations: [...this.state.donations, thisItem],
						myDonations: [...myPostDonations],
					});
				}
				else {
					item.pickup = 'remove';
					console.log(myPostDonations);
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
			{/* DEFAULT VIEW >> LOGIN || SIGNUP */}
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


			{/* VOLUNTEER USER*/}
				 {this.state.loggedin === 'volunteer' && (
					 <ViewVolunteer
						donations={this.state.donations}
						logout={this.logout}
						firstName={this.state['first_name']}
						foodBankList={this.state.foodbanks}
						myDonations={this.state.myDonations}
						newPickup={this.newPickup}
						removePickup={this.removePickup}
					 />
				 )}

			{/* BUSINESS USER*/}
			{this.state.loggedin === 'business' && (
					 <ViewBusiness
						businessName={this.state.businessName}	 
						donations={this.state.donations}
						firstName={this.state['first_name']}
						foodBankList={this.state.foodbanks}
						logout={this.logout}
						myDonations={this.state.myDonations}
						newPickup={this.newPickup}
						removePickup={this.removePickup}
					 />
				 )}

			</div>
		);
	}
}
export default App;