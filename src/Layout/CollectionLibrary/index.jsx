import React from 'react';
import { CollectionBook } from '../../Components/Molecules/CollectionBook';
import './CollectionLibrary.css';

const collectionLibrary = [
  {id: 1, name: "Favoritos"},
  {id: 2, name: "Tecnología"},
  {id: 3, name: "Para motivarme cuando estoy sad"},
  {id: 4, name: "Para superarme cuando estoy al limite"},
]

const CollectionLibrary = () => {
  return (
    <section className="library">
      <ul className="collectionLibraryList">
        {
          collectionLibrary.map(collection => {
            return (
              <li
                key={collection.id}
                className="collectionLibrary"
              >
                <CollectionBook />
                <p className="collectionLibrary-name">
                  {collection.name}
                </p>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export { CollectionLibrary };
