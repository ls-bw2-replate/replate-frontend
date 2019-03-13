import React from 'react';

import '../../styles/Donation.scss';

const Donation = props => {
	return (
		<div className="Donation">
			<i className="fas fa-cart-plus fa-2x" />
			<p>
				{props.businessName} - {props.businessAddr}
			</p>
		</div>
	);
};

export default Donation;
