import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={props.classname}
      placeholder={props.placeholder}
    />
  );
};

export { Input };
