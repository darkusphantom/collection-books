import React from 'react';
import { BookCarousel } from '../../Components/Molecules/BookCarousel';
import './BookList.css';

const SectionBookList = (props) => {
  return(
    <section className={`bookList bookList-${props.namepage}`}>
      <BookCarousel
        title={props.title}
        description={props.description}
      />
    </section>
  );
};

export { SectionBookList };
