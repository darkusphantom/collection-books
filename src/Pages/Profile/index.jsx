import React, { Fragment } from 'react';
import { Header } from '../../Layout/Header';
import { SearchInput } from '../../Components/Molecules/SearchInput';
import { ProfileUser } from '../../Layout/ProfileUser';
import { SectionBookList } from '../../Layout/SectionBookList';
import { Friends } from '../../Layout/Friends';
import { Footer } from '../../Layout/Footer';
import './Profile.css';

const Profile = () => {
  return(
    <Fragment>
      <Header>
        <SearchInput />
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
