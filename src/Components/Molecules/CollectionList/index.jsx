import React from 'react';
import './CollectionList.css'

const CollectionList = (props) => {
  return(
    <button className="collection">
      <p className="collection-text">
        <span className={props.isRecommend ? `recommend` : `not-recommend`}>
          Recomendado por
        </span> {props.text}
      </p>
      <div className="collection-img-container">
        <img 
          className="collectionList-img"
          src={props.image}
          alt={props.imageName}
        />
      </div>
    </button>
  );
};

export { CollectionList };
