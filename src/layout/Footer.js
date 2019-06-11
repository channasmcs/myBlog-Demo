import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
	<footer className="py-5 bg-dark">
		<div className="container">
			<p className="m-0 text-center text-white">
				Copyright © Your Website 2019
			</p>
		</div>
	</footer>
);

Footer.propTypes = {
	children: PropTypes.node,
};

export default Footer;
