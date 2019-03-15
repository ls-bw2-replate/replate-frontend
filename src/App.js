import React, {Component} from 'react';
import axios from 'axios';
import axiosWithAuth from './components/axios/axiosWithAuth';


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

let fakeMyDonations = [
	{
		id:333,
		name: 'Two Tacos',
	}
];

class App extends Component {
	state = {
		businessName: 'Publix',
		donations: [],
		error:'',
		foodbanks: [...fakeFoodBanks],
		first_name: 'SteveDave',
		loggedin: '',
		myDonations: [...fakeMyDonations],
	};

	componentDidMount() {
		// this.getFoodBanks();
	}

	catchErr = err => {
		console.log(err);
		this.setState({
			error:err,
		});
	}

	getDonations = () => {
		axios.get('https://replate-backend.herokuapp.com/api/donations')
			.then(res => {
				console.log('axios get donations', res.data);
				this.setState({ donations: res.data });
				console.log(this.state.donations);
			})
			.catch(err => {
				console.log(err);
				this.setState({
					error:err,
				})
			});
	}

	addThingOne = () => {
		let fakeObj = {
			name: 'FFFFFF',
			quantity_lbs: 29,
			picked_up: false,
			comment: 'fart',
			business_id: 1,
		}
		axios.post('https://replate-backend.herokuapp.com/api/donations', fakeObj)
			.then(res => {
				console.log('ADDthingone', res);
				this.getDonations();
			})
			.catch(err => {
				console.log(err);
				this.setState({
					error:err,
				});
			});
	}

	editThingOne = () => {
		let fakeObj = {
			name: 'mMAMAMAMAM',
			quantity_lbs: 10,
			picked_up: false,
			comment: 'needs to be picked up by 12/11/2019',
			business_id: 1,
		}
		axios.put('https://replate-backend.herokuapp.com/api/donations/1', fakeObj)
			.then(res => {
				console.log('EDITthingone', res);
				this.getDonations();
			})
			.catch(err => {
				console.log(err);
				this.setState({
					error:err,
				});
			});
	}

	killThingOne = () => {
		axios.delete('https://replate-backend.herokuapp.com/api/donations/1')
			.then(res => {
				console.log('KILLthingone', res);
				this.getDonations();
			})
			.catch(err => {
				console.log(err);
				this.setState({
					error:err,
				});
			});
	}

	// FAKE LOGIN HARD CODED for BUSINESS VIEW
	fakeLogin = e => {
		this.setState({
			loggedin: 'volunteer',
		});
		window.history.pushState(null,null,'/volunteer');
	}

	login = usertype => {
		console.log('loginnnn',usertype);
		this.setState(prevState => ({
			...prevState,
			loggedin: usertype,
		}));
		if (usertype === 'waiting') return;
		window.history.pushState(null,null,`/${usertype}`)
		this.getDonations();
		// this.getFoodBanks();
	}

	logout = e => {
		this.setState({
			loggedin: '',
		});
		window.history.pushState(null,null,'/');
		localStorage.clear();
	}

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
	}

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
					this.setState({
						myDonations: [...myPostDonations],
					});
				}
			}
		});
	}

	render() {
		return (
			<div className="App">
			

			{/* DEFAULT VIEW >> LOGIN || SIGNUP */}
				{!this.state.loggedin && ( 
					<ViewDefault 
						error={this.catchErr}
						errorDisplay={this.state.error}
						login={this.fakeLogin}
						loginReal={this.login}
						loggedin={this.state.loggedin}
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
					 	add={this.addThingOne}
						donations={this.state.donations}
						edit={this.editThingOne}
						logout={this.logout}
						firstName={this.state['first_name']}
						foodBankList={this.state.foodbanks}
						kill={this.killThingOne}
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
// export default App;
export default axiosWithAuth(App);