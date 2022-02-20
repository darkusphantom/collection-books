import React, { Fragment } from 'react';
import { Header } from '../../Layout/Header'
import { SearchInput } from '../../Components/Molecules/SearchInput';
import { SectionBookList } from '../../Layout/SectionBookList';
import { Collections } from '../../Layout/Collections';
import { Categories } from '../../Layout/Categories';
import { Footer } from '../../Layout/Footer'
import './Home.css'

const sections = [
    {
      id: 1,
      title: "Para ti",
      description: "Te recomendamos estos libros"
    },
    {
      id: 2,
      title: "Los más populares",
      description: "Lo más escuchados"
    },
    {
      id: 3,
      title: "Beek original",
      description: "Unicos y especiales de la plataforma"
    },
    {
      id: 4,
      title: "Ultimos lanzamientos",
      description: ""
    }
  ];


const Home = () => {
  return (
    <Fragment>
      <Header center="center">
        <SearchInput />
      </Header>
      <section className="sectionBookList">
        {
          sections.map(
            section => <SectionBookList
              key={section.id}
              namepage="home"
              title={section.title}
              description={section.description}
            />
          )
        }
      </section>
      <Collections />
      <Categories />
      <Footer />
    </Fragment>
  );
}

export { Home };
