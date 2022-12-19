import React from 'react';

import './paggination.css'

const Paggination = ({
	numbersOfPage,
	currentPage,
	paginate,
	changePage,
}) => {
	const pageNumbers = [];

	if (numbersOfPage <= 1) return;

	for(let i = 1; i <= numbersOfPage; i++) pageNumbers.push(i);

	return (
		<nav className='paggination'>
			<ul className='paggination__list'>
				<li className='paggination__item'>
					<button
						onClick={() => changePage(-1)}
						type='button'
						className={`paggination__button ${currentPage === 1 ? 'paggination__button--disabled_state' : ''}`}
					>
						<svg xmlns='http://www.w3.org/2000/svg' transform='rotate(180)' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
						</svg>
					</button>
				</li>
				{
					pageNumbers.map(number => (
						<li key={number} className='paggination__item'>
							<button
								onClick={() => paginate(number)}
								type='button'
								className={`paggination__link ${number === currentPage ? 'paggination__link--active_state' : ''}`}
							>{number}</button>
						</li>
					))
				}
				<li className='paggination__item'>
					<button
						onClick={() => changePage(1)}
						type='button'
						className={`paggination__button ${currentPage === pageNumbers.length ? 'paggination__button--disabled_state' : ''}`}
					>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
						</svg>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Paggination;