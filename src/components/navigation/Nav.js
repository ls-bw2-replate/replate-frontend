import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Nav.scss';

const Nav = props => {
	return (
		<nav className="nav">
			<div className="nav__left">
				<img
					id="nav__logo"
					src={require('../../assets/img/replate_text.png')}
					alt="RePlate"
					onClick={props.login}
				/>
				>>
				<NavLink activeClassName="link--active" to="/login">
					Login
				</NavLink>
			</div>

			<div className="nav__right">
				<NavLink activeClassName="link--active" to="/signup">
					Sign Up
				</NavLink>{' '}
				>>
				<NavLink activeClassName="link--active" to="/signup/volunteer">
					Individual
				</NavLink>
				/
				<NavLink activeClassName="link--active" to="/signup/business">
					Business
				</NavLink>
				/
				<NavLink activeClassName="link--active" to="/signup/foodbank">
					Food Bank
				</NavLink>
				/
			</div>
		</nav>
	);
};
export default Nav;
