import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header className="container-header">
      {props.children}
    </header>
  )
};

export { Header };
