import React from 'react';
import { Icon } from '../../Atoms/Icon';
import { Input } from '../../Atoms/Input';
import './SearchInput.css';

const SearchInput = () => {
  return (
      <section className="input-container">
        <button className="btn-search">
          <Icon icon="search">-O</Icon>
        </button>
        <Input
          type="text"
          classname="input-search"
          placeholder="Busca un libro"
        />
        <button className="btn-cancel">
          <Icon icon="cancel">X</Icon>
        </button>
      </section>
  );
};

export { SearchInput };
