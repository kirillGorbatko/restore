import React from 'react';
import Header from '../header';
import ShoppingCartTable from '../shopping_cart_table';
import {
	HomePage,
	CartPage,
	NotFoundPage,
} from '../pages';

import { Routes, Route } from 'react-router-dom';

import './app.css';
import './null.css';

const App = () => {
	return (
		<div className='wrapper'>
			<Header numItems={5} total={210}/>
			<div className='wrapper__in'>
				<Routes>
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</div>
			<ShoppingCartTable />
		</div>
	);
};

export default App;
