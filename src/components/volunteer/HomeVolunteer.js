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
						id={item.id}
						businessName={item.businessName}
						businessAddr={item.businessAddr}
						delivered={item.delivered}
						newPickup={props.newPickup}
						pickup={item.pickup}
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
					<HomeView 
						firstName={props.firstName}
						donations={props.donations}
						newPickup={props.newPickup}
						removePickup={props.removePickup}
					/>
				)}
			/>

			{/* MY DONATIONS */}
			<Route
				path="/loggedin/mydonations"
				render={ownProps => (
					<MyDonations
						firstName={props.firstName}
						myDonations={props.myDonations}
						newPickup={props.newPickup}
						removePickup={props.removePickup}
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
