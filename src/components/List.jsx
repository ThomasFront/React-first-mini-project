import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function List({ products, deleteItem, addItemToCart, delItemFromCart }) {
	return (
		<div className='list-items'>
			{products.map(product => {
				const { id, name, img, price } = product
				return (
					<div className='product' key={id}>
						<img src={img} alt='' />
						<div className='data'>
							<h3>{name}</h3>
							<h5>${price}</h5>
						</div>
						<p className='icon' onClick={() => deleteItem(id)}>
							<MdDeleteForever />
						</p>
						<div className='add-or-delete'>
							<p className='add' onClick={addItemToCart}>
								+
							</p>
							<p className='del' onClick={delItemFromCart}>
								-
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default List
