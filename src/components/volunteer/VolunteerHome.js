import React from 'react';
import '../../styles/VolunteerHome.scss';

import Donation from '../donations/Donation';


const VolunteerHome= props => {
	return (
		<div className="VolunteerHome">

			<div className="left">
				<h2>Hello, {props.firstName}!</h2>
				<p>
					There are {props.donations.length} new donations waiting for pick-up!
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
			</div>

			<div className="right">
			<h2>MyDonations</h2>
				<p>
					You have selected {props.myDonations.length} donations for pick-up
					today.
				</p>

				{props.myDonations.map(item => {
					return (
						<Donation
							id={item.id}
							key={item.id}
							businessName={item.businessName}
							businessAddr={item.businessAddr}
							delivered={item.delivered}
							pickup={item.pickup}
							newPickup={props.newPickup}
							removePickup={props.removePickup}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default VolunteerHome;
