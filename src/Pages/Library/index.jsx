import React, { Fragment } from 'react';
import { Header } from '../../Layout/Header'
import { Footer } from '../../Layout/Footer';
import { CollectionLibrary } from '../../Layout/CollectionLibrary';
import './Library.css'

const Library = () => {
  return(
    <Fragment>
      <Header center="left">
        <h2 className="page-name">Library</h2>
      </Header>
      <CollectionLibrary />
      <Footer />
    </Fragment>
  );
};

export {Library};
