import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/Nav.scss';

const VolunteerNav = props => {
	return (
		<nav className="nav">
			<div className="nav__left">
				<img
					id="nav__logo"
					src={require('../../assets/img/replate_text.png')}
					alt="RePlate"
					onClick={props.logout}
				/>
				>>
				<a href="/" onClick={props.logout}>Logout</a>
			</div>

			<div className="nav__right">
				<NavLink activeClassName="link--active" exact to="/volunteer">
					MyDonations
				</NavLink>
				>>
				<NavLink activeClassName="link--active" to="/volunteer/foodbanks">
					Food Banks
				</NavLink>
			</div>
		</nav>
	);
};
export default VolunteerNav;
