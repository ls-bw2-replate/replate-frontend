import React from 'react';
import '../../styles/HomeVolunteer.scss';

import Donation from '../donations/Donation';


const VolunteerHome= props => {
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
export default VolunteerHome;
