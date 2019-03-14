import React from 'react';

import Donation from './Donation';
import '../../styles/MyDonations.scss';

const MyDonations = props => {
	return (
		<div className="MyDonations">
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
	);
};
export default MyDonations;
