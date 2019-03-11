import React from 'react';
import {NavLink} from 'react-router-dom';

import Login from './Login';
import './Nav.scss';

const Nav = props => {
    return ( 
        <nav className="nav">
            <div className="nav__left">
            /<NavLink activeClassName="link--active" to="/login">Login</NavLink>/
            </div>

            <div className="nav__right">
            /<NavLink activeClassName="link--active" exact to="/">Home</NavLink>/
            <NavLink activeClassName="link--active" to="/signup">Sign Up</NavLink>/
            </div>
          </nav>
     );
}
 
export default Nav;