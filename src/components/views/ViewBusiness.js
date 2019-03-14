import React from 'react';
import {Route} from 'react-router-dom';

import FoodBankList from '../foodbank/FoodBankList';
import VolunteerNav from '../volunteer/VolunteerNav';
import BusinessHome from '../business/BusinessHome';

const ViewBusiness = props => {
    return ( 
        <>
        <header>
            <VolunteerNav logout={props.logout} />
        </header>

        <main>
            {/* BUSINESS HOME >> CREATE NEW DONATIONS && MY DONATIONS */}
            <Route
				exact path="/business"
				render={ownProps => (
					<BusinessHome
                        businessName={props.businessName}
                        donations={props.donations}
						firstName={props.firstName}
						myDonations={props.myDonations}
						newPickup={props.newPickup}
						removePickup={props.removePickup}
					/>
				)}
			/>

			{/* FOOD BANK LIST */}
			<Route
				path="/volunteer/foodbanks"
				render={ownProps => (
					<FoodBankList
					firstName={props.firstName}
					foodBankList={props.foodBankList}
					/>
				)}
			/>
        </main>
        </>
     );
}
export default ViewBusiness;