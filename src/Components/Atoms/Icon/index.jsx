import React from 'react';

const Icon = (props) => {
  return (
      <i className={`icon-${props.icon}`}>{props.children}</i>
  );
};

export { Icon };
