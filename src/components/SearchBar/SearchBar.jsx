// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './SearchBar.module.css';

// export const SearchBar = ({ onSubmit }) => {
//   const [searchValue, setSearchValue] = useState('');

//   const handleInputChange = ({ target: { value } }) => {
//     setSearchValue(value);
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     onSubmit(searchValue);
//     setSearchValue('');
//   };

//   return (
//     <header className={css.SearchBar}>
//       <form className={css.SearchForm} onSubmit={handleFormSubmit}>
//         <button type="submit" className={css.SearchFormBtn}>
//           <span className="button-label"></span>
//         </button>

//         <input
//           className={css.SearchFormInput}
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//           value={searchValue}
//           onChange={handleInputChange}
//         />
//       </form>
//     </header>
//   );
// };

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

import css from './SearchBar.module.css';
import { useState } from 'react';
import propTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChangeValue = ({ target }) => {
    setInputValue(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <header className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="css" className={css.SearchForm_button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          className={CSS.SearchForm_input}
          type="text"
          autoComplete="off"
          value={inputValue}
          onChange={handleChangeValue}
          autoFocus
          placeholder="Search images and photos"
          name="searcher"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};