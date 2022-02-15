import React, { Fragment } from 'react';
import { Book } from '../../Atoms/Book';

const bookList = [
	{id: 1},
	{id: 2},
	{id: 3},
	{id: 4},
	{id: 5},
]

const Collection = () => {
	return (
		<Fragment>
			{
				bookList.map(book =>
					<Book key={book.id} />
				)
			}
		</Fragment>
	)
}

export { Collection };