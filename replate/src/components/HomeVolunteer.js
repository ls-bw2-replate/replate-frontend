import React from 'react';
import {Route} from 'react-router-dom';

import Donation from './Donation';
import './HomeVolunteer.scss';
import MyDonations from './MyDonations';

const HomeView = props => {
    return (
        <>
        <h2>Hello, {props.firstName}!</h2>
        <p>There are {props.donations.length} new donations waiting for pick-up today.</p>

        {props.donations.map(item => {
            return (
                <Donation key={item.id}
                    businessName={item.businessName}
                    businessAddr={item.businessAddr}
                />
            )
        })}
        </>
    )
}

const HomeVolunteer = props => {
    return ( 
        <div className="HomeVolunteer">

        <Route path="/loggedin/mydonations" render={ownProps => (
            <MyDonations
                firstName={props.firstName}
                myDonations={props.myDonations}  />
        )}/>

        <Route path="/loggedin" render={ownProps => (
            <HomeView 
                firstName={props.firstName}
                donations={props.donations}/>
        )}/>

            
        </div>
     );
}
export default HomeVolunteer;