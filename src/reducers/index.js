import updateShoppingCart from './shopping_cart';
import updateBooksList from './book_list';

const reducer = (state, action) => {
	return {
		bookList: updateBooksList(state, action),
		shoppingCart: updateShoppingCart(state, action),
	};
};

export default reducer;
