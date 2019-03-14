import React from 'react';

import '../../styles/Donation.scss';

const Donation = props => {
	return (
		<div className="Donation">
		{props.pickup ? ( 
			<i className={`fas fa-cart-arrow-down fa-2x ${props.pickup}`} id={props.id} onClick={props.removePickup} />
		) : ( 
			<i className="fas fa-cart-plus fa-2x" id={props.id} onClick={props.newPickup} />
		) }
			<p>
				{props.pickup === 'remove' ? ( 
					<>
					<button id={props.id} onClick={props.removePickup}>REMOVE</button>
					<button id={props.id} onClick={props.newPickup}>UNDO</button>
					</>
				) : ( 
					<>{props.businessName} - {props.businessAddr}</>
				)}
			</p>
		</div>
	);
};

export default Donation;
