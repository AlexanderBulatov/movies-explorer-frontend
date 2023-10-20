import React from 'react';

function SearchForm() {
  return (
    <div className="search movies__search">
      <form className="search__form">
        <div className="search__bar">
          <input
            id="search"
            type="text"
            name="movie-search"
            placeholder="search"
            className="search__input"
            required />
          <button type="submit" className="search-bttn"></button>
        </div>
        <label className="filter search__filter">
          <input type="checkbox" className="checkbox" />
          <span className="visible-checkbox"></span>
          <span className="filter__label">Короткометражки</span>
        </label>
      </form>
    </div>

  );
}

export default SearchForm;
