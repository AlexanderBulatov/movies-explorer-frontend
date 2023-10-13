import React from 'react';

function SearchForm() {
  return (
   <> <form className="search-form movies__search__form">
      <div className="search-bar">
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
    <label className="filter-checkbox">
      <input type="checkbox" className="checkbox" />
      <div className="visible-checkbox">
        {/* <div className="checkbox-toggle"></div> */}
      </div>
      <span className="filter-checkbox__label">Короткометражки</span>
    </label>
    </>

  );
}

export default SearchForm;
