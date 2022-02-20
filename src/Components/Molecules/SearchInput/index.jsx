import React from 'react';
import { Icon } from '../../Atoms/Icon';
import { Input } from '../../Atoms/Input';
import IconSearch from '../../../icons/Search.svg'
import IconCancel from '../../../icons/90px/Cancel.svg'
import './SearchInput.css';

const SearchInput = () => {
  const iconCancel = () => {
    return(
      <button className="btn-cancel">
        <Icon
          icon="cancel"
          name={IconCancel}
          alt="Icon cancel"
        />
      </button>
    )
  }

  const isTrue = !true;

  return (
      <section className="input-container">
        <button className="btn-search">
          <Icon
            icon="search"
            name={IconSearch}
            alt="Icon search"
          />
        </button>
        <Input
          type="text"
          classname="input-search"
          placeholder="Busca un libro"
        />
        {
          isTrue ?? iconCancel
        }
      </section>
  );
};

export { SearchInput };
