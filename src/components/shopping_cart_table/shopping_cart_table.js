import React from 'react';
import './shopping_cart_table.css';

const ShoppingCartTable = () => {
	const tableHead = ['#', 'Item', 'Count', 'Price', 'Actions'];
	const tableBody = [
		['1', 'Site Reliability Engineering', '2', '$40']
	];

	return (
		<div className='shopping_cart_table'>
			<div className='container'>
				<h2 className='shopping_cart_table__title'>Your order</h2>
				<table className='shopping_cart_table__table'>
					<thead>
						<tr>
							{
								tableHead.map((tdContent, index) => {
									return (
										<td key={index}>{tdContent}</td>
									);
								})
							}
						</tr>
					</thead>
					<tbody>
					{
						tableBody.map((item, index) => {
							return (
								<tr key={index}>
									{
										item.map(
											(tdItem, index) => <td key={index}>{tdItem}</td>
										)
									}
									<td>
										<div className='shopping_cart_table__actions'>
											<button 
												type='button' 
												className='shopping_cart_table__icon shopping_cart_table__icon--plus_mod'
											>	+ </button>
											<button 
												type='button' 
												className='shopping_cart_table__icon shopping_cart_table__icon--minus_mod'
											> - </button>
											<button 
												type='button' 
												className='shopping_cart_table__icon shopping_cart_table__icon--del_mod'
											> Delete </button>
										</div>
									</td>
								</tr>
							);
						})
					}
					</tbody>
				</table>
				<div className='shopping_cart_table__total'>
					Total: <span>80$</span>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCartTable;