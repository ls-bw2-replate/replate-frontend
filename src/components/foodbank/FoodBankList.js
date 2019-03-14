import React from 'react';

import FoodBank from './FoodBank';
import '../../styles/FoodBankList.scss';

const FoodBankList = props => {
	return (
		<div className="FoodBankList">
			<h2>Hello, {props.firstName}!</h2>
			<p>
				There are {props.foodBankList.length} Food Banks accepting deliveries in your area.
			</p>

			{props.foodBankList.map(item => {
				return (
					<FoodBank
						key={item.id}
						businessName={item.businessName}
						businessAddr={item.businessAddr}
					/>
				);
			})}
		</div>
	);
};
export default FoodBankList;
