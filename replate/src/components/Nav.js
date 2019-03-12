import React from 'react';
import {NavLink} from 'react-router-dom';

import './Nav.scss';

const Nav = props => {
    return ( 
        <nav className="nav">
            <div className="nav__left">
            <img id="nav__logo" src={require('../replate_text.png')}alt=""/>
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