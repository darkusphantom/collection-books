import React from 'react';
import { HeaderListBooks } from '../../Components/Molecules/HeaderListBooks';
import { CollectionList } from '../../Components/Molecules/CollectionList';
import './Collection.css'

const collectionList = [
  {id: 1, text: "Dorime", isRecommend: true},
  {id: 2, text: "Mejora hábitos", isRecommend: false},
  {id: 3, text: "Psicologia", isRecommend: false},
  {id: 4, text: "Hablando de perseo", isRecommend: false},
  {id: 5, text: "Ameno", isRecommend: true},
  {id: 6, text: "Julian", isRecommend: true},
]

const Collections = () => {
  return (
    <section className="collections">
      <HeaderListBooks title="Colecciones" />
      <section className="collection-list">
        {
          collectionList.map(
            collection => <CollectionList
              key={collection.id}
              text={collection.text}
              isRecommend={collection.isRecommend}
            />
          )
        }
      </section>
    </section>
  );
};

export { Collections };
