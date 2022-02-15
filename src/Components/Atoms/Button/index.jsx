import React from 'react';
import './Btn.css';

const Btn = (props) => {
  return(
    <button
      className={props.classname}
    >{props.children}</button>
  );
};

export { Btn };
