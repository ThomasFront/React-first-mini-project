import React from 'react'

function Menu({ filterItems }) {
	return (
		<div className='buttons'>
			<button onClick={() => filterItems('all')}>All</button>
			<button onClick={() => filterItems('nike')}>Nike</button>
			<button onClick={() => filterItems('adidas')}>Adidas</button>
			<button onClick={() => filterItems('vans')}>Vans</button>
		</div>
	)
}

export default Menu
