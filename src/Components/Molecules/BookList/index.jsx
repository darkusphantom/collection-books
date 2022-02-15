import React from 'react';
import { Book } from '../../Atoms/Book';
import './BookList.css';

//API books page:
const books = [
  {
    id: 1,
    title: "Dorime",
    description: "aaaa",
    portada: "",
  },
  {
    id: 2,
    title: "Dorime",
    description: "aaaa",
    portada: "",
  },
  {
    id: 3,
    title: "Dorime",
    description: "aaaa",
    portada: "",
  },
  {
    id: 4,
    title: "Dorime",
    description: "aaaa",
    portada: "",
  },
  {
    id: 5,
    title: "Dorime",
    description: "aaaa",
    portada: "",
  },
  {
    id: 6,
    title: "Dorime",
    description: "aaaa",
    portada: "",
  }
]

const BookList = () => {
  return(
    <ul className="list-books-container">
      {
        books.map(book => 
          <Book key={book.id} />
        )
      }
    </ul>
  );
};

export { BookList };
