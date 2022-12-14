import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = ({numItems, total}) => {
	const [scrollState, setScrollState] = useState(false);

	const headerScroll = () => {
		if (window.scrollY > 10 && !scrollState) {
			setScrollState(true);
		}

		if (window.scrollY <= 10 && scrollState) {
			setScrollState(false);
		}
	}

	window.addEventListener('scroll', headerScroll);

	return(
		<header className={`header ${scrollState ? 'header--scroll_state' : ''}`}>
			<div className='header_in container'>
				<div className='header_logo'>
					<Link to="/" className='header_logo__in'>ReStore</Link>
				</div>

				<Link to="/cart" className='header_cart'>
					<div className='header_cart__icon'>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M298.666 384c11.782 0 21.334-9.551 21.334-21.334v0-42.666c0-11.782-9.551-21.334-21.334-21.334s-21.334 9.551-21.334 21.334v0 42.666c0 11.782 9.551 21.334 21.334 21.334v0zM213.333 384c11.782 0 21.333-9.551 21.333-21.334v0-42.666c0-11.782-9.552-21.334-21.334-21.334s-21.334 9.551-21.334 21.334v0 42.666c0 11.782 9.552 21.334 21.334 21.334v0zM405.334 128h-29.44l-36.906-73.6c-3.3-7.777-10.872-13.133-19.694-13.133-11.782 0-21.334 9.551-21.334 21.334 0 4.063 1.136 7.86 3.108 11.093l-0.053-0.094 27.094 54.4h-144.214l27.094-54.4c1.036-2.422 1.639-5.242 1.639-8.201 0-11.782-9.552-21.334-21.334-21.334-7.719 0-14.481 4.099-18.226 10.24l-0.053 0.094-36.906 73.6h-29.44c-34.925 0.548-63.026 28.988-63.026 63.993 0 27.972 17.945 51.753 42.951 60.458l0.449 0.136 15.787 159.147c3.361 32.484 30.587 57.601 63.679 57.601 0.113 0 0.226-0 0.338-0.001h178.756c0.096 0 0.208 0.001 0.32 0.001 33.093 0 60.319-25.116 63.656-57.327l0.023-0.274 15.786-159.147c25.447-8.845 43.385-32.623 43.385-60.589 0-35.149-28.335-63.68-63.409-63.998h-0.030zM366.72 407.466c-1.12 10.828-10.195 19.2-21.226 19.2-0.038 0-0.075 0-0.113-0h-178.768c-0.032 0-0.070 0-0.107 0-11.031 0-20.107-8.372-21.219-19.109l-0.007-0.091-15.147-151.466h251.733zM405.334 213.333h-298.666c-11.782 0-21.334-9.552-21.334-21.333s9.552-21.334 21.334-21.334v0h298.666c11.782 0 21.334 9.552 21.334 21.334s-9.551 21.334-21.334 21.334v0z"></path>
						</svg>
					</div>
					<div className='header_cart__info'>{numItems} items <br/> ({total}$)</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;