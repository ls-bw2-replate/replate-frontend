import React from 'react';

import '../../styles/Donation.scss';

const Donation = props => {
	console.log(props);
	return (
		<div className="Donation">
		{props.pickup ? <i className="fas fa-cart-arrow-down fa-2x" /> : <i className="fas fa-cart-plus fa-2x" /> }
			<p>
				{props.businessName} - {props.businessAddr}
			</p>
		</div>
	);
};

export default Donation;
