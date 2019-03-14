import React from 'react';
import {Route} from 'react-router-dom';

import FoodBankList from '../foodbank/FoodBankList';
import VolunteerNav from '../volunteer/VolunteerNav';
import MyDonations from '../donations/MyDonations';
import VolunteerHome from '../volunteer/VolunteerHome';

const ViewVolunteer = props => {
    return ( 
        <>
        <header>
            <VolunteerNav logout={props.logout} />
        </header>

        <main>
            {/* HOME */}
            <Route
				exact path="/volunteer"
				render={ownProps => (
					<VolunteerHome
						firstName={props.firstName}
						donations={props.donations}
						newPickup={props.newPickup}
						removePickup={props.removePickup}
					/>
				)}
			/>

            {/* MY DONATIONS */}
			<Route
				path="/volunteer/mydonations"
				render={ownProps => (
					<MyDonations
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
 
export default ViewVolunteer;