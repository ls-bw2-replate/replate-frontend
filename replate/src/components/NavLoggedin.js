import React from 'react';
import {NavLink} from 'react-router-dom';

import './Nav.scss';

const NavLoggedin = props => {
    return ( 
        <nav className="nav">
            <div className="nav__left">
            <img id="nav__logo" 
                src={require('../replate_text.png')} 
                alt="RePlate" 
                onClick={props.logout}/>
            >> <NavLink activeClassName="link--active" to="/settings">Settings</NavLink>/<NavLink to="/">Logout</NavLink>
            </div>
            
            <div className="nav__right">
            <NavLink activeClassName="link--active" to="/loggedin/mydonations">MyDonations</NavLink> >>
            <NavLink activeClassName="link--active" to="/loggedin">Home</NavLink>/
            <NavLink activeClassName="link--active" to="/foodbanks">Food Banks</NavLink>/
            </div>
          </nav>
     );
}
export default NavLoggedin;