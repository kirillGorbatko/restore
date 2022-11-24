import React from 'react';
import Loader from '../loader/loader';
import ErrorIndicator from '../error_indicator/error_indicator';
import BookListItem from '../book_list_item';

import './book_list.css';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'

const BookList = ({books, onAddedToCart}) => {
	return (
		<div className='container'>
			<ul className='booklist__list'>
				{
					books.map((book) => {
						return (
							<li key={book.id} className='booklist__item'>
								<BookListItem 
									book={book} 
									onAddedToCart={() => onAddedToCart(book.id)}
								/>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
}

class BookListContainer extends React.Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render () {
		const { books, loading, error, onAddedToCart } = this.props;

		if (loading) return <Loader />;

		if (error) return <ErrorIndicator />;
		
		return <BookList books={books} onAddedToCart={onAddedToCart}/>;
	};
};

const mapStateToProps = ({books, loading, error}) => {
	return { books, loading, error }
};


const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
	};
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);