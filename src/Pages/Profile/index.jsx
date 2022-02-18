import React, { Fragment } from 'react';
import { SearchInput } from '../../Components/Molecules/SearchInput';
import { ProfileUser } from '../../Layout/ProfileUser';
import { SectionBookList } from '../../Layout/SectionBookList';
import { Friends } from '../../Layout/Friends';
import { Footer } from '../../Components/Molecules/Footer';
import './Profile.css';

const Profile = () => {
  return(
    <Fragment>
      <header className="header-page">
        <SearchInput />
      </header>
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
