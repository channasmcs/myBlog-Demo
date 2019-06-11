import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = props => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
		<div className="container">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<Router>
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active"
								className="nav-link"
								to="/about"
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							{/* <NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/blog"
							>
								Blog
							</NavLink> */}
							<a className="nav-link" href="/blog">
								Blog
							</a>
						</li>
					</Router>
				</ul>
			</div>
		</div>
	</nav>
);

Header.propTypes = {
	children: PropTypes.node,
};

export default Header;
