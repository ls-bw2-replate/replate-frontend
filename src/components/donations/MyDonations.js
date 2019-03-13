import React from 'react';

import Donation from './Donation';
import '../../styles/MyDonations.scss';

const MyDonations = props => {
	console.log('hello');
	return (
		<div className="MyDonations">
			<h2>Hello, {props.firstName}!</h2>
			<p>
				You have selected {props.myDonations.length} donations for pick-up
				today.
			</p>

			{props.myDonations.map(item => {
				return (
					<Donation
						key={item.id}
						businessName={item.businessName}
						businessAddr={item.businessAddr}
					/>
				);
			})}
		</div>
	);
};
export default MyDonations;
