import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleFormSubmit}>
        <button type="submit" className={css.SearchFormBtn}>
          <span className="button-label"></span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};