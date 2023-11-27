import React from 'react';
import SearchForm from './SearchBar.module.css';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  return (
    <header className={styles.SearchBar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


