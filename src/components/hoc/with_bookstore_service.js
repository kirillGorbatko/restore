import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore_service_context';

const withBookstoreService = () => (Wrapped) => {

	return (props) => {
		return (
			<BookstoreServiceConsumer>
				{
					(bookstoreService) => {
						return (
							<Wrapped {...props} bookstoreService={bookstoreService}></Wrapped>
						);
					}
				}
			</BookstoreServiceConsumer>
		);
	};
}

export default withBookstoreService;
