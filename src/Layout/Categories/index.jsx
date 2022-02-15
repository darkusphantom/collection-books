import React from 'react';
import { CategoryList } from '../../Components/Molecules/CategoryList';
import './Categories.css'

const Categories = () => {
  return(
    <section className="categories">
      <CategoryList />
      <button className="more-categories">Ver más categorias</button>
    </section>
  );
};

export { Categories };
