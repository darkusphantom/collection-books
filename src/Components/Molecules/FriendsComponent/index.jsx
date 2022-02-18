import React, { Fragment } from 'react';
import { UserImg } from '../UserImg';
import './FriendComponent.css';

const friendList = [
  {id: 1, img: ''},
  {id: 2, img: ''},
  {id: 3, img: ''},
  {id: 4, img: ''},
  {id: 5, img: ''},
  {id: 6, img: ''},
]

const FriendsComponent = () => {
  return (
    <Fragment>
      <h2 className="friends-title">Friends</h2>
      <ul className="friendsList">
        {
          friendList.map( friend => {
            return(
              <li
                key={friend.id}
                className="friend"
              >
                <UserImg
                  page="friend"
                  img={friend.img}
                  alt=""
                />
              </li>
            )
          })
        }
      </ul>
      <section className="friends-description">
        <p className="friends-follows">Sigues a X</p>
        <p className="friends-follers">X seguidores</p>
      </section>
    </Fragment>
  );
};

export { FriendsComponent };
