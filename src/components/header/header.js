import React from 'react';

import './header.css'

const Header = () => {
	return(
		<header className='header'>
			<div className='header_in container'>
				<div className='header_logo'>
					<a className='header_logo__in' href="">ReStore</a>
				</div>

				<div className='header_cart'>Here will be cart</div>
			</div>
		</header>
	);
};

export default Header;