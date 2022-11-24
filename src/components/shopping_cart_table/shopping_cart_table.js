import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, allBooksRemovedFromCart, bookRemovedFromCart } from '../../actions'

import './shopping_cart_table.css';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<td>#</td>
				<td>Item</td>
				<td>Count</td>
				<td>Total</td>
				<td>Actions</td>
			</tr>
		</thead>
	);
}

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

	const renderRow = (item, index) => {
		const {id, title, count, total} = item;

		const ActionButtons = () => {
			return (
				<div className='shopping_cart_table__actions'>
					<button 
						onClick={() => onIncrease(id)}
						type='button' 
						className='shopping_cart_table__icon shopping_cart_table__icon--plus_mod'
					>	+ </button>
					<button 
						onClick={() => onDecrease(id)}
						type='button' 
						className='shopping_cart_table__icon shopping_cart_table__icon--minus_mod'
					> - </button>
					<button 
						onClick={() => onDelete(id)}
						type='button' 
						className='shopping_cart_table__icon shopping_cart_table__icon--del_mod'
					> Delete </button>
				</div>
			);
		};

		return (
			<tr key={id}>
				<td>{index + 1}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>{total}$</td>
				<td>
					<ActionButtons />
				</td>
			</tr>
		);
	}

	return (
		<div className='shopping_cart_table'>
				<div className='container'>
					<h2 className='shopping_cart_table__title'>Your order</h2>
					<table className='shopping_cart_table__table'>
						<TableHead/>
						<tbody>
							{items.map(renderRow)}
						</tbody>
					</table>
					<div className='shopping_cart_table__total'>
						Total: {total}$
					</div>
				</div>
			</div>
	);
};

const mapStateToProps = ({cartItems, orderedTotal}) => {
	return {
		items: cartItems,
		total: orderedTotal,
	};
};

const mapDispatchToProps = {
	onIncrease: bookAddedToCart,
	onDecrease: bookRemovedFromCart,
	onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);