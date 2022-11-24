import React from 'react';

import './book_list_item.css';

const BookListItem = ({ book, onAddedToCart }) => {
	const { id, img, title, author, price} = book;

	return (
		<article className='book'>
			<div className='book_image'>
				<img className='book_image__in' src={ img } alt={`book ${id}`} />
			</div>
			<div className='book__content'>
				<h3 className='book__title'>{ title }</h3>
				<div className='book__author'>{ author }</div>
				<div className='book__price'>{ price }$</div>
				<div className='book__wrap'>
					<button 
						onClick={onAddedToCart}
						type='button' 
						className='book__button'
					>Buy</button>
				</div>
			</div>
		</article>
	);
};

export default BookListItem;