import React from 'react';
import './Header.css';

const Header = (props) => {
  console.log(props.center);
  return (
    <header
      className={`container-header ${props.center === true ? 'header-center' :'header-left'}`}
    >
      {props.children}
    </header>
  )
};

export { Header };
