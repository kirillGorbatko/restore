import React, {useState} from 'react';
import Loader from '../loader/loader';
import ErrorIndicator from '../error_indicator/error_indicator';
import BookListItem from '../book_list_item';
import Paggination from '../paggination/paggination';

import './book_list.css';
import { bindActionCreators } from 'redux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'

const BookList = ({books, onAddedToCart}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [bookPerPage] = useState(3);

	const lastBookIndex = currentPage * bookPerPage;
	const firstBookIndex = lastBookIndex - bookPerPage;
	const currentBooks = books.slice(firstBookIndex, lastBookIndex);

	const paginate = currentPage => setCurrentPage(currentPage);
	const changePage = (quantity) => setCurrentPage(prev => prev + quantity)

	return (
		<div className='container'>
			<ul className='booklist'>
				{
					currentBooks.map((book) => {
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
			<Paggination
				numbersOfPage={Math.ceil(books.length / bookPerPage)}
				currentPage={currentPage}
				paginate={paginate}
				changePage={changePage}
			/>
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

const mapStateToProps = ({bookList: {books, loading, error}}) => {
	return { books, loading, error }
};


const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return bindActionCreators({
		fetchBooks: fetchBooks(bookstoreService),
		onAddedToCart: bookAddedToCart,
	}, dispatch);
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);