import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from '../../Atoms/Icon'
import IconSearch from '../../../icons/Search.svg'
import IconStar from '../../../icons/90px/Progress-check.svg'
import IconBooks from '../../../icons/Books.svg'
import IconUser from '../../../icons/User.svg'
import './LinksBtnFooter.css'

const LinksBtnFooter = () => {
  return(
    <Fragment>
      <Link to="/" className="footer-page-btn">
        <Icon
          icon="search"
          name={IconSearch}
          alt="Icon search"
        />
        <p>
          Descubre
        </p>
      </Link>
      <Link to="/goals" className="footer-page-btn">
        <Icon
          icon="progress"
          name={IconStar}
          alt="Icon progress"
        />
        <p>
          Logros
        </p>
      </Link>
      <Link to="/library" className="footer-page-btn">
        <Icon
          icon="library"
          name={IconBooks}
          alt="Icon books"
        />
        <p>
          Colección
        </p>
      </Link>
      <Link to="/profile" className="footer-page-btn">
        <Icon
          icon="user"
          name={IconUser}
          alt="Icon user"
        />
        <p>
          Perfil
        </p>
      </Link>
    </Fragment>
  )
}

export { LinksBtnFooter };
