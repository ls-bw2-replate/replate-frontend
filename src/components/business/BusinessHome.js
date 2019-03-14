import React from 'react';
import '../../styles/BusinessHome.scss';

import Donation from '../donations/Donation';


const BusinessHome= props => {
	return (
		<div className="BusinessHome">

			<div className="left">
				<h2>Hello, {props.businessName}!</h2>
				<p>
					Create a new donation?
				</p>

			</div>

			<div className="right">
			<h2>BUSINESS MyDonations</h2>
				<p>
					You have posted {props.myDonations.length} donations for pick-up
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
export default BusinessHome;
