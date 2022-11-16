import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error_boundry';
import BookstoreService from './services';
import { BookstoreServiceProvider } from './components/bookstore_service_context';
import store from './store';

const $root = ReactDOM.createRoot(document.getElementById('root'));
const bookstoreService = new BookstoreService();

$root.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundry>
	</Provider>
);
