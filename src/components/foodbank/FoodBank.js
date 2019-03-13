import React from 'react';

import '../../styles/FoodBank.scss';

const FoodBank = props => {
	return (
		<div className="FoodBank">
			<i className="fas fa-home fa-2x" />
			<p>
				{props.businessName} - {props.businessAddr}
			</p>
		</div>
	);
};

export default FoodBank;
