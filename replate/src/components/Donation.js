import React from 'react';

import './Donation.scss';

const Donation = props => {
    return ( 
        <div className="Donation">
        <i className="fas fa-cart-plus fa-2x"></i>
        <p>{props.businessName} - {props.businessAddr}</p>
        </div>
     );
}
 
export default Donation;