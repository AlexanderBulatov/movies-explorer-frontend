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
      </form>
      <label className="filter search__filter">
        <input type="checkbox" className="checkbox" />
        <div className="visible-checkbox">
          {/* <div className="checkbox-toggle"></div> */}
        </div>
        <span className="filter__label">Короткометражки</span>
      </label>
    </div>

  );
}

export default SearchForm;
