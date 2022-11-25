import React from 'react';
import Header from '../header';
import {
	HomePage,
	CartPage,
	NotFoundPage,
} from '../pages';

import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './app.css';
import './null.css';

const App = ({items, total}) => {

	return (
		<div className='wrapper'>
			<Header numItems={items.length} total={total}/>
			<div className='wrapper__in'>
				<Routes>
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</div>
		</div>
	);
};

const mapStateToProps = ({shoppingCart: {cartItems, orderedTotal}}) => {
	return {
		items: cartItems,
		total: orderedTotal,
	};
};

export default connect(mapStateToProps)(App);
