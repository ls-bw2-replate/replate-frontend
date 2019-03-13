import React from 'react';
import { Route } from 'react-router-dom';
import '../../styles/HomeVolunteer.scss';

import Donation from '../donations/Donation';
import MyDonations from '../donations/MyDonations';
import FoodBankList from '../foodbank/FoodBankList';


const HomeView = props => {
	return (
		<>
			<h2>Hello, {props.firstName}!</h2>
			<p>
				There are {props.donations.length} new donations waiting for pick-up
				today.
			</p>

			{props.donations.map(item => {
				return (
					<Donation
						key={item.id}
						businessName={item.businessName}
						businessAddr={item.businessAddr}
						pickup={item.pickup}
						delivered={item.delivered}
					/>
				);
			})}
		</>
	);
};

const HomeVolunteer = props => {
	return (
		<div className="HomeVolunteer">
		{/* HOME PAGE */}
			<Route
				exact path="/loggedin"
				render={ownProps => (
					<HomeView firstName={props.firstName} donations={props.donations} />
				)}
			/>

			{/* MY DONATIONS */}
			<Route
				path="/loggedin/mydonations"
				render={ownProps => (
					<MyDonations
						firstName={props.firstName}
						myDonations={props.myDonations}
					/>
				)}
			/>

			{/* FOOD BANK LIST */}
			<Route
				path="/loggedin/foodbanks"
				render={ownProps => (
					<FoodBankList
					firstName={props.firstName}
					foodBankList={props.foodBankList}
					/>
				)}
			/>
		</div>
	);
};
export default HomeVolunteer;
