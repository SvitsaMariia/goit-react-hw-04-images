import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeValue = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input} 
            type="text"
            autoComplete="off"
            value={this.state.inputValue}
            onChange={this.handleChangeValue}
            autoFocus
            placeholder="Search images and photos"
            name="searcher"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};