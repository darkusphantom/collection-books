import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from '../../Atoms/Icon'
import './LinksBtnFooter.css'

const LinksBtnFooter = () => {
  return(
    <Fragment>
      <Link to="/" className="footer-page-btn">
        <Icon icon="search">x</Icon>
      </Link>
      <Link to="/goals" className="footer-page-btn">
        <Icon icon="star">x</Icon>
      </Link>
      <Link to="/library" className="footer-page-btn">
        <Icon icon="library">x</Icon>
      </Link>
      <Link to="/profile" className="footer-page-btn">
        <Icon icon="user">x</Icon>
      </Link>
    </Fragment>
  )
}

export { LinksBtnFooter };
