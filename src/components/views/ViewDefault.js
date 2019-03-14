import React from 'react';
import { Route } from 'react-router-dom';

import HomeVolunteer from '../volunteer/HomeVolunteer';
import Login from '../login/Login';
import Nav from '../navigation/Nav';
import Signup from '../signup/Signup';

const ViewDefault = props => {
    return ( 
        <>
    <header>
            <Nav login={props.login} />
    </header>

    <main>
        <Route path="/login" component={Login} />

        <Route
            path="/loggedin"
            render={props => (
                <HomeVolunteer
                    donations={props.donations}
                    firstName={props.firstName}
                    foodBankList={props.foodbanks}
                    myDonations={props.myDonations}
                    newPickup={props.newPickup}
                    removePickup={props.removePickup}
                />
            )}
        />

        <img id="big-logo"
            src={require('../../assets/img/replate_badge.png')}
            alt="RePlate - Feed the Hungry. Reduce Waste."
        />

        <Route path="/signup" component={Signup} />
    </main>
    </>
     );
}
 
export default ViewDefault;