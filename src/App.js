import React, { useState } from 'react'
import data from './data'
import Menu from './components/Menu'
import List from './components/List'

function App() {
	const [products, setProducts] = useState(data)
	const [value, setValue] = useState(0)

	const filterItems = category => {
		if (category === 'all') {
			setProducts(data)
			return
		}

		const newItems = data.filter(product => product.category === category)
		setProducts(newItems)
	}

	const deleteItem = id => {
		const newItemsDelete = products.filter(product => product.id !== id)
		setProducts(newItemsDelete)
	}

	const addItemToCart = () => {
		setValue(value + 1)
	}

	const delItemFromCart = () => {
		if (value === 0) {
			return 0
		}
		setValue(value - 1)
	}

	return (
		<div className='container'>
			<Menu filterItems={filterItems} />
			<h3 className='cart'>W koszyku: {value} przedmiotów.</h3>
			<List
				products={products}
				deleteItem={deleteItem}
				delItemFromCart={delItemFromCart}
				addItemToCart={addItemToCart}
			/>
		</div>
	)
}

export default App
