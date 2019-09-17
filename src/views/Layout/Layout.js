import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from '../../components/Layout/Nav/Nav';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';


import { renderRoutes } from 'react-router-config';

class Layout extends Component {
	
	static propTypes = {
		children: PropTypes.element
	};


	render() {
		const {} = this.props;
        return(
			<section className="content">
				<header className={`header header-top`}>
					<Header/>
					<nav className={`menu`}>
						<Nav/>
					</nav>
				</header>
				<section className="section">
					<div className="category-container">
						{
							renderRoutes(this.props.route.routes)
						}
					</div>
				</section>
				<footer>
					<Footer/>
				</footer>
			</section>
		);
	}
}
export default withRouter(hot(module)(Layout));