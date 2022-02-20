import React from 'react';

const Icon = (props) => {
  return (
    <img
      className={`icon-${props.icon}`}
      src={props.name}
      alt={props.alt}
      width={props.width}
    />
  );
};

export { Icon };
