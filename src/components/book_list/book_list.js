import React from 'react';
import BookListItem from '../book_list_item'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { booksLoaded, booksRequested } from '../../actions'

import './book_list.css';
import Loader from '../loader/loader';

class BookList extends React.Component {
	componentDidMount() {
		const { bookstoreService, booksLoaded, booksRequested } = this.props;

		booksRequested();

		bookstoreService.getBooks()
		.then((data) => booksLoaded(data));
	}

	render () {
		const { books, loading } = this.props;

		if (loading) return <Loader />
		
		return (
			<div className='container'>
				<ul className='booklist__list'>
					{
						books.map((book) => {
							return (
								<li key={book.id} className='booklist__item'>
									<BookListItem book={book} />
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	};
};

const mapStateToProps = ({books, loading}) => {
	return { books, loading }
};

const mapDispatchToProps = {
	booksLoaded,
	booksRequested,
};

// export default withBookstoreService()(
// 	connect(mapStateToProps, mapDispatchToProps)(BookList)) ;
export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);