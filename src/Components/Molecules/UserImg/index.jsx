import React from 'react';
import { Img } from '../../Atoms/Img';
import './UserImg.css'

const UserImg = (props) => {
  console.log(props.page)
  return (
    <div className={`${props.page}-container-img`}>
      <Img
        src={props.img}
        alt={props.alt}
      />
    </div>
  );
};

export { UserImg };
