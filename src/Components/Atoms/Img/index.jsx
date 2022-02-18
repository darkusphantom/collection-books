import React from 'react';
import './Img.css'

const Img = (props) => {
  return (
    <img
      className="image"
      src={props.img}
      alt={props.alt}
    />
  );
};

export { Img };
