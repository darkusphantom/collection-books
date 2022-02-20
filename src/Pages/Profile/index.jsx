import React, { Fragment } from 'react';
import { Header } from '../../Layout/Header';
import { Icon } from '../../Components/Atoms/Icon';
import { ProfileUser } from '../../Layout/ProfileUser';
import { SectionBookList } from '../../Layout/SectionBookList';
import { Friends } from '../../Layout/Friends';
import { Footer } from '../../Layout/Footer';
import IconBurger from '../../icons/btn-menu2.svg'
import './Profile.css';

const Profile = () => {
  return(
    <Fragment>
      <Header center="between">
        <h2 className="page-name">Profile</h2>
        <Icon
          icon="burger"
          name={IconBurger}
          alt="Icon burger"
        />
      </Header>
      <div className="container">
        <ProfileUser />
        <SectionBookList
          namepage="profile"
          title="Ultima actividad"
        />
        <Friends />
      </div>
      <Footer />
    </Fragment>
  );
};

export {Profile};
