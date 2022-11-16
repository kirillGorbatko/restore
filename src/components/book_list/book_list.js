import React from 'react';
import BookListItem from '../book_list_item'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { booksLoaded } from '../../actions'

import './book_list.css';

class BookList extends React.Component {
	componentDidMount() {
		// recieve data
		const { bookstoreService, booksLoaded } = this.props;
		const data = bookstoreService.getBooks();

		// dispatch action to store
		booksLoaded(data);
	}

	render () {
		const { books } = this.props;
		
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

const mapStateToProps = ({books}) => {
	return { books }
};

const mapDispatchToProps = {
	booksLoaded
};

// export default withBookstoreService()(
// 	connect(mapStateToProps, mapDispatchToProps)(BookList)) ;
export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);