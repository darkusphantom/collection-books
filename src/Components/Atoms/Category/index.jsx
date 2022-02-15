import React from 'react';
import './Category.css';

const Category = (props) => {
  return(
    <button className="btn-category">{props.name}</button>
  );
}

export { Category };
