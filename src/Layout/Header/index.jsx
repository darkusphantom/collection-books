import React from 'react';
import './Header.css';

const Header = (props) => {
  const positionContent = () => {
    if(props.center === "center") {
      return "header-center";
    }

    if(props.center === "left") {
      return "header-left";
    }

    if(props.center === "between") {
      return "header-content-between";
    }
  }

  return (
    <header
      className={`container-header ${positionContent()}`}
    >
      {props.children}
    </header>
  )
};

export { Header };
