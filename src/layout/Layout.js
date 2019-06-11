import Header from './Header';
import Footer from './Footer';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
class Layout extends Component {
	render() {
		return (
			<div>
				<Header />
				<main className="container">
					<Router>
						<Route exact path="/" component={Home} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/about" component={About} />
					</Router>
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}
}
export default Layout;
