import React from 'react';

import './error_indicator.css';
import errorGif from './error.gif'

const ErrorIndicator = () => {
	return (
		<div className='error_indicator'>
			<div className='error_indicator__img'>
				<img src={errorGif} alt='Error img' />
			</div>
			<div className='error_indicator__content'>
				<h4 className='error_indicator__title'>Ooops!</h4>
				<div className='error_indicator__text'>
					<p>Something has gone terribly wrong.</p>
					<p>(but we are already reading books to fix it)</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorIndicator;
