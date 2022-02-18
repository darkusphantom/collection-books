import React from 'react';
import { UserImg } from '../../Components/Molecules/UserImg'
import './ProfileUser.css';

const ProfileUser = (props) => {
  return (
    <section className="profile-user">
      <UserImg
        page="profile"
        src=""
        alt=""
      />
      <section className="profile-detail">
        <p className="profile-books">XXX audiolibros</p>
        <p className="profile-friends">XXX amigos</p>
      </section>
    </section>
  );
};

export { ProfileUser };
