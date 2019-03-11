import React from 'react';
import {Link} from 'react-router-dom';

import './Nav.scss';

const Nav = props => {
    return ( 
        <nav className="nav">
            <div className="nav__left">
            <Link to="/login">Login</Link>
            </div>

            <div className="nav__right">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
          </nav>
     );
}
 
export default Nav;