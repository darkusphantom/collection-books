import React from 'react';
import { Category } from '../../Atoms/Category';
import { Icon } from '../../Atoms/Icon';
import './CategoryList.css';

const categoryList = [
  {id: 1, name: "Fantasia", icon: ""},
  {id: 2, name: "Desarrollo Personal", icon: ""},
  {id: 3, name: "Emprendimiento", icon: ""},
  {id: 4, name: "Finanzas", icon: ""},
]

const CategoryList = () => {
  return(
    <section className="categoryList">
      {
        categoryList.map(category => {
          return(
            <div 
              className="btn-category-container"
              key={category.id}
            >
              <Icon icon={category.icon}>x</Icon>
              <Category name={category.name} />
            </div>
          )
        })
      }
    </section>
  );
};

export { CategoryList };
