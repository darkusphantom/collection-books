import React, { Fragment } from 'react';
import { Btn } from '../../Atoms/Button';

import './HeaderListBooks.css';

const HeaderListBooks = (props) => {
  return(
    <Fragment>
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
      <Btn classname="btn-more">Ver más</Btn>
    </Fragment>
  );
};

export { HeaderListBooks };
