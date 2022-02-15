import React, { Fragment } from 'react';
import { HeaderListBooks } from '../HeaderListBooks';
import { BookList } from '../BookList';
import './BookCarousel.css';

const BookCarousel = (props) => {
  return(
    <Fragment>
      <HeaderListBooks
        title={props.title}
        description={props.description}
      />
      <section className="carousel-books">
        <BookList />
      </section>
    </Fragment>
  );
};

export { BookCarousel };
